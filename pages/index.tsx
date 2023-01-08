
import React from "react";
import Header from "./components/header";

import Link from 'next/link';
import React from 'react';
import Header from './components/header';


//Its a task page

const index = () => {

  return <div>Index Page</div>;
};
=======
  return (
    <div>
      <Header />
      <div className='text-center mt-20'>
        <h1 className='text-5xl font-bold border-2 border-black rounded-xl p-5 mx-60 bg-pink-50 '>LogIn/SignUp</h1>
        <div className='text-center text-xl font-semibold pt-40 space-x-20'>
        <Link className=' bg-white border-4 border-black rounded-xl p-5 hover:bg-pink-50 ' href='../components/login'>Log In</Link>
        <Link className='bg-white border-4 border-black rounded-xl p-5 hover:bg-pink-50' href='../components/signup'>SignUp</Link>
        </div>
        
      </div>
    </div>
  )
}


export default index;
