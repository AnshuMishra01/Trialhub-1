import React from 'react'
import Image from 'next/image'

const IntroCard = ({image,name,role,days}) => {
 
  return <>
     {/* <div className='grid justify-center p-2 bg-red-100'><h1 className='font-bold'>MEMBERS ON LEAVE</h1> </div> */}


    <div className='flex flex-wrap bg-orange-100 space-x-1.5 m-auto justify-center p-1.5'>
      
      <div className='rounded-full  bg-red-100 w-16 '>
        <Image className='w-full rounded-full ' src={image} alt="ProfilePic" width="100" height="100"/>
      </div>
        <div className='w-40 m-auto justify-center'>
          <div className='font-semibold justify-center'>{name}</div>
          <small>{role}</small>
        </div>
         <button className='bg-green-500 m-auto rounded-lg px-2'>{days} days</button>

         
      </div>

      
    
  </>
}

export default IntroCard
