import React from 'react'
import {IoIosCheckmarkCircle} from "react-icons/io";
import {IoMdCreate} from "react-icons/io";
import {IoMdTrash} from "react-icons/io";


const InformationCard = () => {
  return <>
  <div className="grid grid-cols-2  text-center py-4">
           <div className='grid grid-cols-3 text-center py-2'>
            <div>05-01-23</div>
            <div>05-01-23</div>
            <div>05-01-23</div>
           </div>
           <div className='grid grid-cols-3 text-center py-2'>
            <div>16 hours</div>
            <div className=''><button className=' m-auto bg-green-500 text-white px-1'>Approved</button></div>
            <div className='flex m-auto'><span className=''><IoMdCreate/></span><span><IoMdTrash/></span></div>
           </div>
          
        </div>
  </>
    
  
}

export default InformationCard
