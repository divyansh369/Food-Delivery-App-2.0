import React from 'react'
import Header from '../components/Header'
import { useState,useEffect } from 'react';

const Main = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // // Simulate loading with a setTimeout
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);

  //   // Clear the timer on component unmount
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <main className="w-screen min-h-screen flex items-center justify-center flex-col bg-wback">
      <Header/>
    </main>
  )
}

export default Main