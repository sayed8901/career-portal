import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobId } = useParams();
  const jobs = useLoaderData();

  const [data, setData] = useState({});

  useEffect(() => {
    if (jobs) {
      let match = jobs.find((job) => job.id == jobId);
      setData(match);
    }
  }, []);

  // console.log(jobId, jobs, data);

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
  } = data;

  const navigate = useNavigate();

  const backBtn = () => {
    navigate(-1);
  };

  return (
    <div className="my-container">
      <h1 className="text-4xl font-bold text-center my-12">Featured Jobs</h1>
      <div className="md:grid grid-cols-5">
        <div className="space-y-8 col-span-3">
          <p>
            <span className="font-bold block mb-4">
                Job Description:</span>
            {jobDescription}
          </p>
          <p>
            <span className="font-bold block mb-4">
                Job Responsibility:</span>
            {jobResponsibility}
          </p>
          <p>
            <span className="font-bold block mb-4">
                Eductional Reqiurements:
            </span>
            {educationalRequirements}
          </p>
          <p>
            <span className="font-bold block mb-4">
                Experience:</span>
            {experienceNeeded}
          </p>

          {/* back btn */}
          <button onClick={backBtn} className="btn btn-bg">
            Back to all jobs
          </button>
        </div>

        <div className="flex flex-col gap-4 col-span-2">
          <div className="bg-slate-100 py-8 px-6 rounded-lg">
            <h3 className="text-xl font-bold border-b-4 border-slate-200 pb-4">Job Details</h3>
            <div className="flex gap-4 my-4">
                <img src="/src/assets/Icons/Frame.png" alt="" />
                <p><span className="font-bold mr-4">Salary:</span>{salary}</p>
            </div>
            <div className="flex gap-4 my-4">
                <img src="/src/assets/Icons/Frame-1.png" alt="" />
                <p><span className="font-bold mr-4">Job Title:</span>{jobTitle}</p>
            </div>
            
            <h3 className="text-xl font-bold border-b-4 border-slate-200 pb-4 mt-8">Contact Information</h3>
            <div className="flex gap-4 my-4">
                <img src="/src/assets/Icons/Frame-2.png" alt="" />
                <p><span className="font-bold mr-4">Phone:</span>{companyContactNo}</p>
            </div>
            <div className="flex gap-4 my-4">
                <img src="/src/assets/Icons/Frame-3.png" alt="" />
                <p><span className="font-bold mr-4">Email:</span>{companyEmail}</p>
            </div>
            <div className="flex gap-4 my-4">
                <img src="/src/assets/Icons/Frame-4.png" alt="" />
                <p><span className="font-bold mr-4">Address:</span>{companyAddress}</p>
            </div>
          </div>

          <button className="text-center h-12 px-6 font-medium text-white transition duration-200 rounded-md shadow-md md:mb-0 bg-purple-500 hover:bg-purple-600 btn-bg w-full">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
