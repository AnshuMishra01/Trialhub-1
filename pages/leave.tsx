import React, { useState } from 'react'
import Header from './components/header'
import LeaveLeftSide from './components/leaveLeftSide'

function leave() {
  const [selected,setSelected]=useState(" ");
  return <>
    <Header />
    <LeaveLeftSide  selected={selected} setSelected={setSelected}/>
    </>
}

export default leave