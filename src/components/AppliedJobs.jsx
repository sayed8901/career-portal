import React from 'react';
import AppliedJobsItem from './AppliedJobsItem';

const AppliedJobs = () => {
    const storedCart = JSON.parse(localStorage.getItem('appliedJobs'));
    console.log(storedCart);

    
    return (
        <div className='my-container'>
            <h1 className='text-4xl font-bold text-center mt-4 mb-8'>Applied Jobs</h1>
            <div className='text-right space-x-4 my-4'>
                <button className='font-bold'>Filter by:</button>
                <button className='btn btn-bg'>Remote</button>
                <button className='btn btn-bg'>Onsite</button>
            </div>
            <div>
                {
                    storedCart.map(appliedItem => 
                    <AppliedJobsItem
                        key = {appliedItem.id}
                        appliedItem = {appliedItem}
                    ></AppliedJobsItem>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;