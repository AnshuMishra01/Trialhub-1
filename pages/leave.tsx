import React, { useState } from 'react'
import Header from './components/header'
import LeaveLeftSide from '../pages/components/Leave/leaveLeftSide'
import LeaveContent from '../pages/components/Leave/leaveContent';
import LeaveRightSidebar from './components/Leave/leaveRightSidebar';


function leave() {
  const [selected,setSelected]=useState(" ");
  return <>
   <div>
    <Header />
     <div className='flex'>
      <div className='w-1/5'>
    <LeaveLeftSide  selected={selected} setSelected={setSelected}/>
    </div>

    <div className="w-3/5">
    <LeaveContent />
    </div>

    <div  className='w-1/5'>
      <LeaveRightSidebar/>
    </div>
   
    </div>

  </div>

  </>
}

export default leave