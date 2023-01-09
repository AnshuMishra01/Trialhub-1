import React from 'react'
import  Image from 'next/image'
import ProfilePic from "../../../public/proPic.webp"
import InformationCard from './InformationCard'

const LeaveContent = () => {
  return (
    <div>

      
       <div className="bg-orange-200 flex flex-wrap m-auto p-1 justify-center">
       <Image className='w-2/12 rounded-full ' src={ProfilePic} alt="ProfilePic" />
      <div className='m-auto'>
      <h1 className='font-semibold'>WELCOME! SHASHANK YADAV</h1>
      <div className='space-x-2 '>
      <small><label>Employee id :</label>211222</small>
      <small><label>Designation :Senior Deveoper</label>211222</small>
      </div>
       </div>
       <button className='m-auto text-white bg-black w-32 rounded-md'>Apply Leave</button>

       </div>

       <div className="container2 bg-orange-100 flex flex-wrap p-3">
        <div className="bg-black w-1/5 m-auto p-1 text-white align-center text-center rounded-md">
         <div>Total Working Hours</div>
         <div>100</div>
        </div>
        <div className="bg-black w-2/12 m-auto p-1 text-white text-center rounded-md">
          <div>Total Leaves</div>
          <div>45</div>
        </div>
        <div className="bg-black w-2/12 m-auto p-1 text-white text-center rounded-md">
          <div>Balance Leaves</div>
          <div>38</div>
        </div>
        <div className="bg-black w-1/4 m-auto p-1 text-white text-center rounded-md">
          <div>Calender</div>
          
        </div>
       </div>

       <div className="container3 bg-slate-100 content-box ">
       <div className='grid  px-4 py-2'>
        <div className="grid grid-cols-2 bg-slate-400 text-center ">
           <div className='grid grid-cols-3 text-center '>
            <div className='font-semibold'>Start Date</div>
            <div className='font-semibold'>End Date</div>
            <div className='font-semibold'>Leave Date</div>
           </div>
           <div className='grid grid-cols-3 text-center'>
            <div className='font-semibold'>Duration</div>
            <div className='font-semibold'>Status</div>
            <div className='font-semibold'>Actions</div>
           </div>
        </div>
        <div className='overflow-auto '>
         <InformationCard/>
         </div>
    </div>

       </div>

    </div>
  )
}

export default LeaveContent
