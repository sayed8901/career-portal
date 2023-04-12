import React, { useState } from 'react';
import AppliedJobsItem from './AppliedJobsItem';

const AppliedJobs = () => {
    const storedCart = JSON.parse(localStorage.getItem('appliedJobs'));
    // console.log(storedCart);

    const [jobs, setJobs] = useState(storedCart);
    // console.log(jobs);

    const [jobCategory, setJobCategory] = useState([storedCart]);

    const handleRemoteJobsBtn = () => {
        const remoteJobs = storedCart.filter(job => job.jobStatus == 'Remote');
        setJobs(remoteJobs);
    }
    
    const handleOnsiteJobsBtn = () => {
        const onsiteJobs = storedCart.filter(job => job.jobStatus == 'Onsite');
        setJobs(onsiteJobs);
    }

    
    return (
        <div className='my-container'>
            <h1 className='text-4xl font-bold text-center mt-4 mb-8'>Applied Jobs</h1>
            <div className='text-right space-x-4 my-4'>
                <button className='font-bold'>Filter by:</button>
                <button className='btn btn-bg'
                    onClick={handleRemoteJobsBtn}
                        >Remote</button>
                <button className='btn btn-bg'
                    onClick={handleOnsiteJobsBtn}
                        >Onsite</button>
            </div>
            <div>
                {
                    jobs.map(appliedItem => 
                    <AppliedJobsItem
                        key = {appliedItem.id}
                        appliedItem = {appliedItem}
                        handleRemoteJobsBtn = {handleRemoteJobsBtn}
                        handleOnsiteJobsBtn = {handleOnsiteJobsBtn}
                    ></AppliedJobsItem>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;