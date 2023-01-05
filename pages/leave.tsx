import React, { useState } from 'react'
import Header from './components/header'
import LeaveLeftSide from '../pages/components/Leave/leaveLeftSide'
import LeaveContent from '../pages/components/Leave/leaveContent';
import LeaveRightSidebar from './components/Leave/leaveRightSidebar';
import LeaveContentBox1 from  './components/Leave/InformationCard'

function leave() {
  const [selected,setSelected]=useState(" ");
  return <>
   <div>
    <Header />
     <div className='flex'>
      <div className='w-1/5'>
    <LeaveLeftSide  selected={selected} setSelected={setSelected}/>
    </div>

    <div className="w-3/5 h-vh  h-screen overflow-auto">
    <LeaveContent />
    </div>

    <div  className='w-1/5 h-vh  overflow-y-auto h-screen'>
      <LeaveRightSidebar/>
    </div>
   
    </div>

  </div>

  </>
}

export default leave