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
        <p className="px-8">
            Context API is used to make a context or state-change easily accessible throughout the routes.
            <br /> <br />
            Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree. To avoid prop drilling, we can use context api.
        </p>
      </div>
      <div className="border border-slate-200 rounded-md p-4 mb-8">
        <h3 className="font-bold mb-4 border-b-4 border-slate-100">What is custom Hook in React?</h3>
        <p className="px-8">
            Custom Hook is a special functionality of React router. Besides using react custom hook, we can create our own hook function such as custom loader and many more & use it very easily.
            <br /> <br />
            Generally, custom hooks functions might be created in "components" folder or even a folder named "Loaders" can be created to hold or save the custom hook or custom loader function.
        </p>
      </div>
      <div className="border border-slate-200 rounded-md p-4 mb-8">
        <h3 className="font-bold mb-4 border-b-4 border-slate-100">What is useRef? Why to use it?</h3>
        <p className="px-8">
            useRef is a special react hook that allows us to handle values between renders. though react handles virtually DOM manipulation, sometimes it can be used to manipulate a DOM element directly.
            <br /> <br />
            Generally, useRef hook is used to store a mutable value that does not make a re-render when updated.
        </p>
      </div>
      <div className="border border-slate-200 rounded-md p-4 mb-8">
        <h3 className="font-bold mb-4 border-b-4 border-slate-100">What is useMemo? Why to use it?</h3>
        <p className="px-8">
          useMemo is another special react hook that can handle dependency rendering. It only runs if its dependencies update. This can improve performance.
          <br /> <br />
          The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
