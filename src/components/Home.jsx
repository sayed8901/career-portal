import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import JobCategoryItem from "./JobCategoryItem";

const Home = () => {
  const jobCategory = useLoaderData();
//   console.log(jobCategory);

  return (
    <div>
      <div className="my-container sm:grid grid-cols-2 items-center">
        <div className="text-center sm:text-left mb-8 sm:mb-0">
          <h1 className="text-3xl lg:text-7xl font-bold tracking-wide leading-snug">
            Find here your
            <br />
            <span className="text-gradient">Dream</span> job
          </h1>
          <p className="my-2 sm:my-4 lg:my-12">
            The first and leading career management site in the country with
            in-depth understanding of the needs of job seekers and employers.
          </p>
          <Link to={"/blog"}>
            <button className="btn btn-bg" title="Click for more info">
              Get Started
            </button>
          </Link>
        </div>
        <img src="/src/assets/cover-pic.jpg" className="rounded-md" alt="" />
      </div>

      {/* jobs category section */}
      <div className="my-container text-center space-y-4 sm:space-y-8 my-4">
        <h1 className="text-5xl font-bold">Job Category List</h1>
        <p>
          Explore our vast collection of thousands of job opportunities with all
          the information you need is at your fingertips here.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {jobCategory.map((category) => (
            <JobCategoryItem
              key={category.id}
              category={category}
            ></JobCategoryItem>
          ))}
        </div>
      </div>

      {/* to go to featured jobs section */}
      <div className="my-container text-right">
        <Link to={"/featuredJobs"}>
          <button className="btn btn-bg" title="Click here to see all the available jobs right now">
            Tap on it to see all the available jobs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
