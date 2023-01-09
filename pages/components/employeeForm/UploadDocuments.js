import React, { useState } from "react";
import { useRouter } from 'next/router'

export default function UploadDocuments() {
  const router = useRouter()

  const [resume, setResume] = useState("");
  const [marksheet10, setMarksheet10] = useState('')
  const [marksheet12, setMarksheet12] = useState('')
  const [panCard, setPanCard] = useState('')
  const [aadharCard, setAadharCard] = useState('')

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("marksheet10", marksheet10 );
    formData.append("marksheet12", marksheet12 );
    formData.append("panCard", panCard );
    formData.append("aadharCard", aadharCard );
    formData.append("resume", resume );

    const url = "http://localhost:3000/AddEmployee";
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    })
    const data = response.json();
    if(data){
      console.log("data: ", data);
      router.push("/");
    }else{
      router.push('/AddEmployee');
    }
  }

  const handleCancel=(e)=>{
    e.preventDefault();
    router.push("/");
  }
  return (
    <>
      <div className="pb-8 mx-auto">
        <p className="text-sm text-dark-300 ">Step-3/3 </p>
      </div>

      <div name="contact" className=" flex flex-col basis-3/4 w-full h-screen">
        <div className="flex my-3">
          <label className="block my-2 mx-4 w-full text-lg " htmlFor="name">
            Class 10th Marksheet
          </label>
          <input
            type="file"
            className=" block w-full text-sm text-dark-500 
            hover:cursor-pointer
            hover:file:cursor-pointer
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-2
            file:text-sm file:font-semibold
            file:bg-[#E3D5CA] file:text-dark-500
            hover:file:bg-violet-100 mx-4"
            name="marksheet10"
            onChange={(e)=>{setMarksheet10(e.target.files[0])}}
          />
        </div>

        <div className="flex my-3">
          <label className="block my-2 mx-4  w-full text-lg " htmlFor="name">
            Class 12th Marksheet
          </label>
          <input
            type="file"
            className="block w-full text-sm text-dark-500
            hover:cursor-pointer
            hover:file:cursor-pointer
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-2
            file:text-sm file:font-semibold
            file:bg-[#E3D5CA] file:text-dark-500
            hover:file:bg-violet-100 mx-4"
            name="marksheet12"
            onChange={(e)=>{setMarksheet12(e.target.files[1])}}
          />
        </div>

        <div className="flex my-3">
          <label className="block my-2 mx-4  w-full text-lg" htmlFor="name">
            Aadhar Card
          </label>
          <input
            type="file"
            className="block w-full text-sm text-dark-500
            hover:cursor-pointer
            hover:file:cursor-pointer
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-2
            file:text-sm file:font-semibold
            file:bg-[#E3D5CA] file:text-dark-500
            hover:file:bg-violet-100 mx-4"
            name="aadharCard"
            onChange={(e)=>{setAadharCard(e.target.files[2])}}
          />
        </div>

        <div className="flex my-3">
          <label className="block my-2 mx-4  w-full text-lg" htmlFor="name">
            Pan Card
          </label>
          <input
            type="file"
            className="block w-full text-sm text-dark-500
            hover:cursor-pointer
            hover:file:cursor-pointer
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-2
            file:text-sm file:font-semibold
            file:bg-[#E3D5CA]  file:text-dark-500
            hover:file:bg-violet-100 mx-4"
            name="panCard"
            onChange={(e)=>{setPanCard(e.target.files[3])}}
          />
        </div>

        <div className="flex my-3">
          <label className="block my-2 mx-4  w-full text-lg" htmlFor="name">
            Resume
          </label>
          <input
            type="file"
            className="block w-full text-sm text-dark-500
            hover:cursor-pointer
            hover:file:cursor-pointer
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-2
            file:text-sm file:font-semibold
            file:bg-[#E3D5CA]  file:text-dark-500
            hover:file:bg-violet-100 mx-4"
            name="resume"
            onChange={(e)=>{setResume(e.target.files[4])}}
          />
        </div>

        <div className="flex flex-row-reverse my-4 ">
          <button
            onClick={handleSubmit}
            className="text-white bg-[#202020] rounded-full border-2 border-[#202020]  px-5 py-2 mx-1 my-8 flex items-center"
          >
            Submit
          </button>
          <button onClick={handleCancel} className="text-dark rounded-full border-2 border-[#202020]  px-5 py-2 mx-1 my-8 flex items-center">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
