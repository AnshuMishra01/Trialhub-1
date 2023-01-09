import Link from "next/link";
import React from "react";

//Its a task page

const index = () => {

  return (
    <div>
      <div className='text-center mt-20'>
        <h1 className='text-3xl mx-10 p-1 md:text-5xl font-bold border-2 border-black rounded-xl md:p-5 md:mx-60 bg-pink-50 '>LogIn/SignUp</h1>
        <div className='text-center text-xl font-semibold pt-40 space-x-20'>
        <Link className=' bg-white border-4 border-black rounded-xl p-5 hover:bg-pink-50 ' href='../components/login'>Log In</Link>
        <Link className='bg-white border-4 border-black rounded-xl p-5 hover:bg-pink-50' href='../components/signup'>SignUp</Link>
        </div>
        
      </div>
    </div>
  )

};

export default index;
