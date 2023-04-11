import React from "react";
import { Link } from "react-router-dom";
import JobDetails from "./JobDetails";

const FeaturedJobItem = ({ jobItem }) => {
//   console.log(jobItem);
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
  } = jobItem;


  return (
    <div className="m-2 p-8 border rounded-md text-left">
      <img src={companyLogo} className="rounded-md w-48 h-20" alt="" />
      <h1 className="text-3xl font-semibold mt-4">{jobTitle}</h1>
      <p className="text-xl my-2 font-semibold">{companyName}</p>
      <div className="flex gap-4 my-2">
        <p className="border-outline">{jobStatus}</p>
        <p className="border-outline">{jobType}</p>
      </div>
      <div className="flex gap-8 my-4">
        <div className="flex gap-2">
          <img
            src="/src/assets/Icons/Frame-4.png" alt=""
          />
          <p>{jobLocation}</p>
        </div>
        <div className="flex gap-2">
          <img src="/src/assets/Icons/Frame.png" alt="" />
          <p>{salary}</p>
        </div>
      </div>

      {/* to go to featured jobs section */}
      <Link to={`/featuredJobs/${id}`} >
        <button className="btn btn-bg" title="Click here to see details info"> 
            View Details
        </button>
      </Link>
    </div>
  );
};

export default FeaturedJobItem;
