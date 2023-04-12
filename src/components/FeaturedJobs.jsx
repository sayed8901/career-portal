import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobItem from './FeaturedJobItem';

const FeaturedJobs = () => {
    const jobsData = useLoaderData();
    // console.log(jobsData);

    const slicedJobs = jobsData.slice(0,4);
    // console.log(jobsData, slicedJobs);

    const [jobs, setJobs] = useState(slicedJobs);
    // console.log(jobs);


    const handleShowAllBtn = () => {
        setJobs(jobsData);
    }

    return (
        <div className='my-container text-center space-y-4 sm:space-y-8 my-4'>
            <h1 className='text-4xl font-bold'>Featured Jobs</h1>
            <p>Our vision is to try bringing Internet technology in the mainstream business and economic life of the society.</p>
            <div className='md:grid grid-cols-2'>
                {
                    jobs.map(jobItem => <FeaturedJobItem
                        key = {jobItem.id}
                        jobItem = {jobItem}
                    ></FeaturedJobItem>)
                }
            </div>

            {/* all jobs btn part */}
            <button 
                onClick={handleShowAllBtn}
                className="btn btn-bg text-xl p-8" title="Click here to see all the available jobs right now">
                    See All Jobs
            </button>
        </div>
    );
};

export default FeaturedJobs;