import React, { useRef } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { auth, db } from "../utils/firebase"
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  dob: Yup.string().required('Date of birth is required'),
  location: Yup.string().required('Location is required'),
  contact: Yup.string().required('Contact is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  username: Yup.string().required('User name is required'),
  password: Yup.string().required('Password is required'),
  contactNumber: Yup.string().required('Contact Number is required'),
});

export default function Signup() {
  const navigate = useNavigate()

  const queryClient = useQueryClient();

  const signupMutation = useMutation({
    mutationFn: async (data) => {
      return createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(async (userCredentials) => {
          delete data.password;
          data.uid = userCredentials.user.uid
          await setDoc(doc(db, "users", userCredentials.user.uid), data);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['user']);
      toast.success("User created successfully");
      navigate('/signin');
    },
    onError: () => {
      toast.error("Error creating user");
    }
  });

  const formRef = useRef();
  const formHandler = async (e) => {
    e.preventDefault();
    let data = {
      firstName: formRef.current.firstName.value,
      lastName: formRef.current.lastName.value,
      dob: formRef.current.dob.value,
      location: formRef.current.location.value,
      contact: formRef.current.contact.value,
      email: formRef.current.email.value,
      username: formRef.current.username.value,
      password: formRef.current.password.value,
    }

    try {
      await validationSchema.validate(data, { abortEarly: false });
      signupMutation.mutate(data);
    } catch (errors) {
      console.error(errors.inner[0]);
      toast.dismiss();
      toast.error(errors.inner[0].message + "");
    }
  }

  return (
    <div style={{ background: "url(./SignupMain.png)", backgroundSize: "cover" }} className='w-full h-screen '>
      <div className='w-full h-full bg-[rgba(7,7,7,0.4)] flex flex-col items-center justify-center'>
        <div className='flex flex-col justify-center items-center w-[70vw] xsm:min-w-[90%] sm:min-w-[500px] h-[85.57894736842105vh] bg-[rgba(0,0,0,0.6)]'>
          <div className='flex flex-col items-center justify-center'>
            <img className='w-[15.833333333333334vw] min-w-[290px]' src='./MainLogo.svg' />
          </div>

          <div className='flex flex-col items-center mt-[4.947368421052632vh] xsm:mt-0'>
            <h1 className='font-[700] text-custom-36 xsm:mb-[10px] leading-[42.19px]'>Create Your Account</h1>
            <form ref={formRef} onSubmit={formHandler} className='flex flex-col items-center'>
              <div className='flex flex-col items-center gap-[1.5789473684210527vh] xsm:mt-0 mt-[7.2631578947368425vh]'>
                <div className='flex xsm:flex-col gap-[88px] xsm:gap-[10px] sm:gap-[20px]'>
                  <div className='flex flex-col gap-[9px]'>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>First Name</label>
                    <input name='firstName' className='w-[19.166666666666668vw] min-w-[210px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] text-black ' />
                  </div>
                  <div className='flex flex-col gap-[9px] '>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>Last Name</label>
                    <input name='lastName' className='w-[19.166666666666668vw] min-w-[210px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] text-black ' />
                  </div>
                </div>

                <div className='flex xsm:flex-col gap-[88px] xsm:gap-[10px] sm:gap-[20px]'>
                  <div className='flex flex-col gap-[9px]'>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>Date of Birth</label>
                    <input name='dob' className='w-[19.166666666666668vw] min-w-[210px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] text-black' type='date' />
                  </div>
                  <div className='flex flex-col gap-[9px]'>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>Location</label>
                    <input name='location' className='w-[19.166666666666668vw] min-w-[210px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] text-black ' />
                  </div>
                </div>

                <div className='flex xsm:flex-col gap-[88px] xsm:gap-[10px] sm:gap-[20px]'>
                  <div className='flex flex-col gap-[9px]'>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>Contact Number</label>
                    <input name='contact' className='w-[19.166666666666668vw] min-w-[210px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] text-black ' />
                  </div>
                  <div className='flex flex-col gap-[9px]'>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>Email Address</label>
                    <input name='email' className='w-[19.166666666666668vw] min-w-[210px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] text-black ' />
                  </div>
                </div>

                <div className='flex xsm:flex-col gap-[88px] xsm:gap-[10px] xsm:mb-[10px] sm:gap-[20px]'>
                  <div className='flex flex-col gap-[9px]'>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>Username</label>
                    <input name='username' className='w-[19.166666666666668vw] min-w-[210px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] text-black ' />
                  </div>
                  <div className='flex flex-col gap-[9px]'>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>Password</label>
                    <input type='password' name='password' className='w-[19.166666666666668vw] min-w-[210px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] text-black ' />
                  </div>
                </div>
              </div>
              <div>
                <button className='w-[262px] h-[48px] rounded-[4px] bg-[rgba(229,9,20,1)] text-white border-[1px] border-black font-[400] text-[20px] leading-[23.44px] xsm:mt-[15px] mt-[4.947368421052632vh]'>{signupMutation.isLoading ? <img src={Loader} className='w-[20px] h-[20px] m-auto' /> : 'Sign Up'}</button>
                <p className='text-[14px] text-center leading-[16.41px] font-[400] mt-[1.894736842105263vh] xsm:mt-[5px]'>Already have an account? <span className='text-[red]'><Link to={'/signin'}>Login</Link></span></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
