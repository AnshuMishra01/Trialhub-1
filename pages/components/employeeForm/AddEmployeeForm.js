import Image from "next/image";
import React, { useState, useMemo } from "react";
import ProfilePicture from "../assets/ProfilePicture.svg";
import CountryList from "./CountryList";
import UploadDocuments from "./UploadDocuments";

export default function AddEmployeeForm() {
  const [step, setstep] = useState(1);

  const handleStep1 = (e) => {
    e.preventDefault();
    if(name  && dob && mobile && email){
    setstep(2);
    console.log(name, dob, mobile, email);
    }else alert("Please fill all fields")
  };

  const handleStep2 = (e) => {
    e.preventDefault();
    if (area && town && state && pincode) {
      setstep(3);
      console.log(area, town, state, pincode);
    } else alert("Please fill all fields");
  };

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [town, setTown] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");


  const handleCancel = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="basis-1/4 font-sans text-xl px-4 py-5">
          <div className="font-bold px-3 py-2 rounded-md">Details</div>
          <div
            className={`bg-${
              step == 3 ? "" : "[#E3D5CA]"
            } px-3 py-2 rounded-md`}
          >
            Personal Info
          </div>
          <div
            className={`bg-${
              step == 3 ? "[#E3D5CA]" : ""
            } px-3 py-2 rounded-md`}
          >
            Document Upload{" "}
          </div>
        </div>

        <div
          name="contact"
          className="basis-3/4 w-full h-screen bg-[#E3D5CA] flex justify-center items-center p-8"
        >
          <form className="flex flex-col max-w-[600px] w-full">
            {/* STEP 1/3 OF FORM STARTS  */}
            {step == 1 ? (
              <>
                <div className="pb-8 mx-auto">
                  <p className="text-sm text-dark-300 ">Step-1/3 </p>
                </div>
                <div className="flex flex-center mx-auto my-2">
                  <Image
                    src={ProfilePicture}
                    className="w-50"
                    alt="Upload Picture"
                    priority="false"
                  />
                </div>
                <div className="flex flex-col my-2">
                  <label htmlFor="name">
                    Name <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    className="bg-[#fff] p-2 text-dark-300 rounded-md"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label htmlFor="department">
                    Department <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    className="bg-[#fff] p-2 text-dark-300 rounded-md"
                    type="text"
                    placeholder="Department"
                    name="department"
                    value={department}
                    onChange={(e) => {
                      setDepartment(e.target.value);
                    }}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label htmlFor="name">
                    DOB <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    className=" bg-[#fff] p-2 text-dark-300 rounded-md"
                    type="date"
                    placeholder="DOB"
                    name="dob"
                    value={dob}
                    onChange={(e) => {
                      setDob(e.target.value);
                    }}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label htmlFor="name">
                    Mobile <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    className="  bg-[#fff] p-2 text-dark-300 rounded-md"
                    type="number"
                    placeholder="Mobile"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label htmlFor="name">
                    Email <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    className=" bg-[#fff] p-2 text-dark-300 rounded-md"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-row-reverse ">
                  <button
                    onClick={handleStep1}
                    className="text-white bg-[#202020] rounded-full border-2 border-[#202020]  px-5 py-2 mx-1 my-8 flex items-center"
                  >
                    Next
                  </button>
                  <button
                    onClick={handleCancel}
                    className="text-dark rounded-full border-2 border-[#202020]  px-5 py-2 mx-1 my-8 flex items-center"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              ""
            )}

            {/* STEP 2/3 OF FORM STARTS  */}
            {step == 2 ? (
              <>
                {/* _________________________________  */}
                <div className="pb-8 mx-auto">
                  <p className="text-sm text-dark-300 ">Step-2/3 </p>
                </div>

                <div className="flex flex-col my-2">
                  <label htmlFor="name">
                    Area, Steet, Sector, Village{" "}
                    <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    className=" bg-[#fff] p-2 text-dark-300 rounded-md"
                    type="text"
                    placeholder="Area"
                    name="area"
                    value={area}
                    onChange={(e) => {
                      setArea(e.target.value);
                    }}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label htmlFor="name">
                    Town/City <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    className=" bg-[#fff] p-2 text-dark-300 rounded-md"
                    type="text"
                    placeholder="Town"
                    name="town"
                    value={town}
                    onChange={(e) => {
                      setTown(e.target.value);
                    }}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label htmlFor="name">
                    Pincode <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    className=" bg-[#fff] p-2 text-dark-300 rounded-md"
                    type="number"
                    placeholder="Pincode"
                    name="pincode"
                    value={pincode}
                    onChange={(e) => {
                      setPincode(e.target.value);
                    }}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label htmlFor="name">
                    State <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    className=" bg-[#fff] p-2 text-dark-300 rounded-md"
                    type="text"
                    placeholder="State"
                    name="state"
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label htmlFor="name">
                    Country <span className="text-[#FF0000]">*</span>
                  </label>
                  <CountryList />
                </div>
                <div className="flex flex-row-reverse ">
                  <button
                    onClick={handleStep2}
                    className="text-white bg-[#202020] rounded-full border-2 border-[#202020]  px-5 py-2 mx-1 my-8 flex items-center"
                  >
                    Next
                  </button>
                  <button
                    onClick={handleCancel}
                    className="text-dark rounded-full border-2 border-[#202020]  px-5 py-2 mx-1 my-8 flex items-center"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              ""
            )}

            {/* STEP 3/3 OF FORM  */}
            {step == 3 ? <UploadDocuments /> : ""}
          </form>
        </div>
      </div>
    </>
  );
}
