import React from 'react'
import LeaveList from './leaveList'
import IntroCard from './introCard'

const LeaveRightSidebar = () => {
  return <>
    <div className='grid justify-center p-2 bg-orange-100'><h1 className='font-bold'>MEMBERS ON LEAVE</h1> </div>
    {LeaveList.map((data)=>{
        return(
           <IntroCard 
            image={data.imgUrl}   name={data.name}  role={data.role}  days={data.days}
                             
             />
        )
    })}
  </>
}

export default LeaveRightSidebar
