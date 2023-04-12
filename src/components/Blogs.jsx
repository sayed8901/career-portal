import React from "react";

const Blogs = () => {
  return (
    <div className="my-container">
      <h1 className="text-4xl font-bold text-center mt-4 mb-8">
        Welcome to my blog!
      </h1>

      <div className="text-center my-16">
        <h2 className="text-2xl font-bold text-center mb-4">
          Basic concepts About React router
        </h2>
        <h4>
          Here I am going to discus about some basic concept of react
          fundamentals & the usage of react router to navigate among the pages.
        </h4>
      </div>

      <div className="border border-slate-200 rounded-md p-4 mb-8">
        <h3 className="font-bold mb-4 border-b-4 border-slate-100">What is Context API & when to use it?</h3>
        <p >
            Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree. To avoid prop drilling, we can use context api.
            <br /> <br />
            So, context API is used to make a context or state-change easily accessible throughout the routes.
        </p>
      </div>
      <div className="border border-slate-200 rounded-md p-4 mb-8">
        <h3 className="font-bold mb-4 border-b-4 border-slate-100">What is custom Hook in React?</h3>
        <p >
            Context
        </p>
      </div>
      <div className="border border-slate-200 rounded-md p-4 mb-8">
        <h3 className="font-bold mb-4 border-b-4 border-slate-100">What is useRef? Why to use it?</h3>
        <p >
            Context
        </p>
      </div>
      <div className="border border-slate-200 rounded-md p-4 mb-8">
        <h3 className="font-bold mb-4 border-b-4 border-slate-100">What is useMemo? Why to use it?</h3>
        <p >
            Context
        </p>
      </div>
    </div>
  );
};

export default Blogs;
