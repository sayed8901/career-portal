import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppliedJobsItem = ({ appliedItem }) => {
  // console.log(appliedItem);
  
  const {
    id,
    jobTitle,
    companyName,
    companyLogo,
    companyContactNo,
    companyEmail,
    companyAddress,
    jobLocation,
    jobStatus,
    jobType,
    salary,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experienceNeeded,
  } = appliedItem;


  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/featuredJobs/${id}`)
  }


  return (
    <div className="sm:flex justify-between items-center mb-4 p-4 border border-slate-100 rounded-md">
      <div className="sm:flex items-center gap-4 md:gap-8">
        <img className="h-24 w-20 sm:h-36 sm:w-32 lg:h-60 lg:w-60 rounded-lg" src={companyLogo} alt="" />
        <div className="flex flex-col justify-center sm:space-y-2 md:space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold mt-4">{jobTitle}</h3>
          <p className="text-xl my-2 font-semibold">{companyName}</p>
          <div className="flex gap-4 my-2">
            <p className="border-outline">{jobStatus}</p>
            <p className="border-outline">{jobType}</p>
          </div>
          <div className="flex gap-4 md:gap-8 my-4">
            <div className="flex gap-2 text-sm md:text-base">
              <img src="/assets/Icons/Frame-4.png" alt="" />
              <p>{jobLocation}</p>
            </div>
            <div className="flex gap-2 text-sm md:text-base">
              <img src="/assets/Icons/Frame.png" alt="" />
              <p>{salary}</p>
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleNavigate} className="btn btn-bg mt-4 lg:mt-0" title="Click here to see details info"> 
        View Details
      </button>
    </div>
  );
};

export default AppliedJobsItem;
