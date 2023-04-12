import React, { useState } from 'react';
import AppliedJobsItem from './AppliedJobsItem';

const AppliedJobs = () => {
    let storedCart = JSON.parse(localStorage.getItem('appliedJobs'));
    // console.log(storedCart);


    const [jobCategory, setJobCategory] = useState([storedCart]);

    const handleRemoteJobsBtn = () => {
        storedCart = storedCart.filter(job => job.jobStatus == 'Remote');
        // console.log(storedCart);
        setJobCategory(storedCart);
    }
    
    const handleOnsiteJobsBtn = () => {
        storedCart = storedCart.filter(job => job.jobStatus == 'Onsite');
        // console.log(storedCart);
        setJobCategory(storedCart);
    }

    
    return (
        <div className='my-container'>
            <h1 className='text-4xl font-bold text-center mt-4 mb-8'>Applied Jobs</h1>
            <div className='text-right space-x-4 my-4'>
                <button className='font-bold'>Filter by:</button>
                <button onClick={handleRemoteJobsBtn}
                    className='btn btn-bg'
                    >Remote</button>
                <button onClick={handleOnsiteJobsBtn}
                    className='btn btn-bg'
                    >Onsite</button>
            </div>
            <div>
                {
                    storedCart.map(appliedItem => 
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