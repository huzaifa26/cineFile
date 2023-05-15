import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';

export default function Header() {
  const [user, setUser] = useState();
  const queryClient = useQueryClient();

  useEffect(() => {
    setUser(queryClient.getQueryData(["user"]));
  }, [queryClient])

  const moviesQuery = useQuery(['movies'], fetchData);

  async function fetchData() {
    let result = await getDocs(collection(db, "movies"))
    result = result.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })
    return result
  }

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
