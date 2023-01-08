import React,{useState} from 'react'
import {IoMdArrowDropdown} from "react-icons/io";


const LeaveLeftSide = ({selected,setSelected}) => {
  const[isActive,setIsActive]=useState(false);
  const options=["Leave","Balance Leaves","Apply for leave","Manage leave","View Status"];
return (
  
    <div className='h-full'>
       <div className='dropdown relative bg-black w-full  h-screen'>
       <div className='flex space-x-4 p-2 cursor-pointer bg-blue-500 dropdown_btn text-white flex' onClick={(e)=>setIsActive(!isActive)}>
        <span>{selected}</span> 
        <span className='relative top-1'><IoMdArrowDropdown/></span>
        </div>
       {isActive && (
       <div className='dropdown_content absolute w-full'>
        {options.map((option)=>(
          <div onClick={(e)=>{
            setSelected(option);
            setIsActive(false);
          }}
          className='text-white p-2 cursor-pointer hover:bg-slate-500'>{option}</div>
        ))}
       
       </div>
       )}
       </div>
      
    </div>
  )
}

export default LeaveLeftSide
