import React from 'react';
import { useLoaderData } from 'react-router-dom';

import jobData from '../../public/jobsById.json';


const JobDetails = () => {
    const jobInfo = useLoaderData();
    console.log(jobInfo);

    return (
        <div className='my-container'>
            Job Details for:
        </div>
    );
};

export default JobDetails;