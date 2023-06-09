import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { collection, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useQueryClient } from '@tanstack/react-query';
import { db } from '../utils/firebase';


export default function PostCard({ post }) {
  const timeAgo = moment(post.createdAt).fromNow();

  const [user, setUser] = useState();
  const queryClient = useQueryClient();

  useEffect(() => {
    setUser(queryClient.getQueryData(["user"]));
  }, [queryClient])

  const likeClickHandler = async () => {
    const postRef = doc(db, 'posts', post.id);
    await updateDoc(postRef, {
      likeCount: post.likeCount + 1,
      likedBy: post?.likedBy ? [...post.likedBy, user] : [user]
    });

    const userRef = doc(db, 'users', user.uid);
    const useras = await updateDoc(userRef, {
      liked: user?.liked ? [...user.liked, post.id] : [post.id]
    })

    let u = { ...user };
    u.liked = user?.liked ? [...user.liked, post.id] : [post.id]
    queryClient.setQueryData(['user'], u);
    setUser(u);
    localStorage.setItem('user', JSON.stringify(u));
    queryClient.invalidateQueries(['posts']);
  }

  const unlikeClickHandler = async () => {
    const postRef = doc(db, 'posts', post.id);
    await updateDoc(postRef, {
      likeCount: post.likeCount - 1,
      likedBy: post.likedBy.filter(u => u.uid !== user.uid)
    });
  
    const userRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userRef);
  
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const updatedLiked = userData.liked.filter(postId => postId !== post.id);
  
      await updateDoc(userRef, {
        liked: updatedLiked
      });
  
      const updatedUser = { ...userData, liked: updatedLiked };
      queryClient.setQueryData(['user'], updatedUser);
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      queryClient.invalidateQueries(['posts']);
    }
  };

  return (
    <div className='px-[3.802vw]'>
      <div className='flex items-center justify-between my-[20px]'>
        <div className='flex gap-[15px] items-center'>
          <img className='w-[70px]' src='/feedPic.png' />
          <div className='flex flex-col gap-[8px]'>
            <h5 className='font-[500] text-[18px] leading-[24px]'>{post.user.firstName + " " + post.user.lastName}</h5>
            <p className='font-[500] text-[14px] leading-[18px]'>{timeAgo}</p>
          </div>
        </div>
        <div>
          <svg width="30" height="30" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.125 64.1665C48.125 58.8508 43.8157 54.5415 38.5 54.5415C33.1843 54.5415 28.875 58.8508 28.875 64.1665C28.875 69.4822 33.1843 73.7915 38.5 73.7915C43.8157 73.7915 48.125 69.4822 48.125 64.1665Z" fill="white" />
            <path d="M48.125 64.1665C48.125 58.8508 43.8157 54.5415 38.5 54.5415C33.1843 54.5415 28.875 58.8508 28.875 64.1665C28.875 69.4822 33.1843 73.7915 38.5 73.7915C43.8157 73.7915 48.125 69.4822 48.125 64.1665Z" fill="white" />
            <path d="M48.125 38.5C48.125 33.1843 43.8157 28.875 38.5 28.875C33.1843 28.875 28.875 33.1843 28.875 38.5C28.875 43.8157 33.1843 48.125 38.5 48.125C43.8157 48.125 48.125 43.8157 48.125 38.5Z" fill="white" />
            <path d="M48.125 12.8335C48.125 7.51775 43.8157 3.2085 38.5 3.2085C33.1843 3.2085 28.875 7.51776 28.875 12.8335C28.875 18.1492 33.1843 22.4585 38.5 22.4585C43.8157 22.4585 48.125 18.1492 48.125 12.8335Z" fill="white" />
          </svg>
        </div>
      </div>

      <p className='font-[400] text-[18px] leading-[24px] xsm:text-[16px] mb-[20px]'>{post.content}</p>

      <div className=''>
        <div className='flex max-w-[100%] overflow-auto'>
          <img className='min-w-[92.188vw] object-cover' src={post.url[0]} />
          <img className='min-w-[92.188vw] object-cover' src={post.url[0]} />
          {/* {post.url.map((url)=>{
          return <img className='w-[92.188vw] object-cover' src={url} />
        })} */}
        </div>
        <div className='bg-white py-[10px] px-[2.604vw] flex justify-between items-center'>
          {user?.liked?.includes(post?.id) ?
            <div onClick={unlikeClickHandler} className='flex items-center gap-[0.625vw] cursor-pointer hover:scale-[1.1] transition-all'>
              <svg className='rotate-180 w-[2.604vw] min-w-[30px]' viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M95.165 57.3311C96.9697 54.9464 97.9688 52.0245 97.9688 48.9845C97.9688 44.1612 95.2725 39.5958 90.9326 37.0499C89.8154 36.3946 88.5433 36.0497 87.248 36.0509H61.4883L62.1328 22.8487C62.2832 19.6583 61.1553 16.629 58.9639 14.3194C57.8884 13.181 56.591 12.2753 55.1516 11.6582C53.7123 11.0411 52.1617 10.7257 50.5957 10.7315C45.0098 10.7315 40.0684 14.4913 38.5859 19.8731L29.3584 53.2813H15.4688C13.5674 53.2813 12.0312 54.8175 12.0312 56.7188V95.8204C12.0312 97.7218 13.5674 99.2579 15.4688 99.2579H80.0615C81.0498 99.2579 82.0166 99.0645 82.9082 98.6778C88.0215 96.4971 91.3193 91.502 91.3193 85.9591C91.3193 84.6055 91.126 83.2735 90.7393 81.9845C92.5439 79.5997 93.543 76.6778 93.543 73.6378C93.543 72.2843 93.3496 70.9522 92.9629 69.6632C94.7676 67.2784 95.7666 64.3565 95.7666 61.3165C95.7451 59.963 95.5518 58.6202 95.165 57.3311ZM19.7656 91.5235V61.0157H28.4668V91.5235H19.7656ZM88.1289 53.6036L85.7764 55.6446L87.2695 58.3731C87.7615 59.2719 88.0165 60.2811 88.0107 61.3057C88.0107 63.0782 87.2373 64.7647 85.9053 65.9249L83.5527 67.9659L85.0459 70.6944C85.5378 71.5932 85.7929 72.6024 85.7871 73.627C85.7871 75.3995 85.0137 77.086 83.6816 78.2462L81.3291 80.2872L82.8223 83.0157C83.3142 83.9145 83.5693 84.9237 83.5635 85.9483C83.5635 88.3546 82.1455 90.5245 79.9541 91.5128H35.3418V60.672L46.0303 21.9464C46.3059 20.9538 46.8975 20.0781 47.7155 19.452C48.5336 18.8259 49.5334 18.4835 50.5635 18.4766C51.3799 18.4766 52.1855 18.713 52.8301 19.1964C53.8936 19.9913 54.4629 21.1944 54.3984 22.4727L53.3672 43.7852H87.1406C89.0527 44.9561 90.2344 46.9327 90.2344 48.9845C90.2344 50.7569 89.4609 52.4327 88.1289 53.6036Z" fill="#E50914" />
              </svg>
              <p className='text-black font-[400] text-[24px] xsm:text-[16px] leading-[24px]'>Unlike<span className='pl-[5px] text-[18px]'>({post.likeCount})</span></p>
            </div>
            :
            <div onClick={likeClickHandler} className='flex items-center gap-[0.625vw] cursor-pointer hover:scale-[1.1] transition-all'>
              <svg className='w-[2.604vw] min-w-[30px]' viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M95.165 57.3311C96.9697 54.9464 97.9688 52.0245 97.9688 48.9845C97.9688 44.1612 95.2725 39.5958 90.9326 37.0499C89.8154 36.3946 88.5433 36.0497 87.248 36.0509H61.4883L62.1328 22.8487C62.2832 19.6583 61.1553 16.629 58.9639 14.3194C57.8884 13.181 56.591 12.2753 55.1516 11.6582C53.7123 11.0411 52.1617 10.7257 50.5957 10.7315C45.0098 10.7315 40.0684 14.4913 38.5859 19.8731L29.3584 53.2813H15.4688C13.5674 53.2813 12.0312 54.8175 12.0312 56.7188V95.8204C12.0312 97.7218 13.5674 99.2579 15.4688 99.2579H80.0615C81.0498 99.2579 82.0166 99.0645 82.9082 98.6778C88.0215 96.4971 91.3193 91.502 91.3193 85.9591C91.3193 84.6055 91.126 83.2735 90.7393 81.9845C92.5439 79.5997 93.543 76.6778 93.543 73.6378C93.543 72.2843 93.3496 70.9522 92.9629 69.6632C94.7676 67.2784 95.7666 64.3565 95.7666 61.3165C95.7451 59.963 95.5518 58.6202 95.165 57.3311ZM19.7656 91.5235V61.0157H28.4668V91.5235H19.7656ZM88.1289 53.6036L85.7764 55.6446L87.2695 58.3731C87.7615 59.2719 88.0165 60.2811 88.0107 61.3057C88.0107 63.0782 87.2373 64.7647 85.9053 65.9249L83.5527 67.9659L85.0459 70.6944C85.5378 71.5932 85.7929 72.6024 85.7871 73.627C85.7871 75.3995 85.0137 77.086 83.6816 78.2462L81.3291 80.2872L82.8223 83.0157C83.3142 83.9145 83.5693 84.9237 83.5635 85.9483C83.5635 88.3546 82.1455 90.5245 79.9541 91.5128H35.3418V60.672L46.0303 21.9464C46.3059 20.9538 46.8975 20.0781 47.7155 19.452C48.5336 18.8259 49.5334 18.4835 50.5635 18.4766C51.3799 18.4766 52.1855 18.713 52.8301 19.1964C53.8936 19.9913 54.4629 21.1944 54.3984 22.4727L53.3672 43.7852H87.1406C89.0527 44.9561 90.2344 46.9327 90.2344 48.9845C90.2344 50.7569 89.4609 52.4327 88.1289 53.6036Z" fill="#E50914" />
              </svg>
              <p className='text-black font-[400] text-[24px] xsm:text-[16px] leading-[24px]'>Like<span className='pl-[5px] text-[18px]'>({post.likeCount})</span></p>
            </div>
          }
          <div className='flex items-center gap-[0.625vw]'>
            <svg className='w-[2.604vw] min-w-[30px]' viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100.834 100.833L82.5003 82.4998H18.3337C15.8128 82.4998 13.6556 81.603 11.862 79.8094C10.0653 78.0127 9.16699 75.854 9.16699 73.3332V18.3332C9.16699 15.8123 10.0653 13.6536 11.862 11.8569C13.6556 10.0633 15.8128 9.1665 18.3337 9.1665H91.667C94.1878 9.1665 96.3466 10.0633 98.1432 11.8569C99.9368 13.6536 100.834 15.8123 100.834 18.3332V100.833ZM18.3337 18.3332V73.3332H86.2816L91.667 78.7186V18.3332H18.3337Z" fill="#E50914" />
            </svg>
            <p className='text-black font-[400] text-[24px] xsm:text-[16px] leading-[24px]'>Comment</p>
          </div>
          <div className='flex items-center gap-[0.625vw]'>
            <svg className='w-[2.604vw] min-w-[30px]' viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M102.119 45.6971L67.7443 11.3221C67.2638 10.8411 66.6514 10.5134 65.9847 10.3804C65.3179 10.2474 64.6267 10.3151 63.9984 10.575C63.3701 10.8348 62.833 11.2752 62.455 11.8403C62.077 12.4054 61.8751 13.07 61.8747 13.7499V31.0878C50.7286 32.0417 38.4181 37.4987 28.2904 46.0882C16.0958 56.435 8.50325 69.7682 6.90911 83.63C6.78454 84.7076 7.00305 85.7972 7.53355 86.7435C8.06406 87.6898 8.87952 88.4447 9.86389 88.9007C10.8483 89.3567 11.9514 89.4906 13.0163 89.2833C14.0812 89.0761 15.0535 88.5383 15.7951 87.7464C20.5216 82.7147 37.3396 66.8034 61.8747 65.4026V82.4999C61.8751 83.1798 62.077 83.8443 62.455 84.4094C62.833 84.9746 63.3701 85.4149 63.9984 85.6748C64.6267 85.9347 65.3179 86.0024 65.9847 85.8694C66.6514 85.7364 67.2638 85.4086 67.7443 84.9276L102.119 50.5526C102.762 49.9082 103.123 49.0351 103.123 48.1249C103.123 47.2146 102.762 46.3416 102.119 45.6971ZM68.7497 74.2026V61.8749C68.7497 60.9632 68.3876 60.0889 67.7429 59.4442C67.0983 58.7995 66.2239 58.4374 65.3122 58.4374C53.2466 58.4374 41.4947 61.587 30.3829 67.8046C24.7237 70.9852 19.4509 74.809 14.6693 79.1999C17.1615 68.9561 23.4435 59.2151 32.7376 51.3303C42.715 42.8698 54.8923 37.8124 65.3122 37.8124C66.2239 37.8124 67.0983 37.4502 67.7429 36.8056C68.3876 36.1609 68.7497 35.2866 68.7497 34.3749V22.0514L94.8275 48.1249L68.7497 74.2026Z" fill="#E50914" />
            </svg>
            <p className='text-black font-[400] xsm:text-[16px] leading-[24px]'>Share</p>
          </div>
        </div>
      </div>
    </div>
  )
}
