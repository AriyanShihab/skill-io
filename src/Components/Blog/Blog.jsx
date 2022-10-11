import React from "react";

const Blog = () => {
  return (
    <div className="bg-slate-900 py-20 px-4">
      <div className="bg-slate-800 p-5 rounded border border-slate-200 border-opacity-20 md:w-3/4 mx-auto ">
        <h2 className="font-semibold text-xl text-cyan-500 my-3">
          What is the pourpose of react-router ?
        </h2>
        <p className="text-slate-200 leading-7">
          react router is mainly used for, routing through our react
          application. all most every mordern web application's are Single page
          appication today, and react rouer exactly help us in this case, it's
          allow us to navigate through diffarent route withou reloading the
          page.
          <br />
          it's help us to create and manage nasted comples route in our
          application, also give us some amezing Hoocks like useNavigation,
          useLoaderData, useRef etc
        </p>
      </div>
      <div className="bg-slate-800 p-5 rounded border border-slate-200 border-opacity-20 md:w-3/4 mx-auto mt-4 ">
        <h2 className="font-semibold text-xl text-cyan-500 my-3">
          How does Contecxt API works ?
        </h2>
        <p className="text-slate-200 leading-7">
          in react, context API, allow us to pass data in any kind of nasted
          component tree in our application without props drilling. <br />
          before we can start using it we have to create an context API using
          createContext(default_value) after that we have to creta a context
          provider to Share all the data we passed inside MyContext.Provider
          value= some value <br />
          and then we can use all the data we as a value in MyContext.Provider.
          using useContext(MyContext); <br />
          note: we have wrap all the component by the contextProvider if we want
          to use context data in those componet
        </p>
      </div>
      <div className="bg-slate-800 p-5 rounded border border-slate-200 border-opacity-20 md:w-3/4 mx-auto mt-4 mb-20  ">
        <h2 className="font-semibold text-xl text-cyan-500 my-3">
          what is useRef hooks ?
        </h2>
        <p className="text-slate-200 leading-7">
          useRef returns a mutable ref object whose .current property is
          initialized to the passed argument (initialValue). The returned object
          will persist for the full lifetime of the component.
        </p>
      </div>
    </div>
  );
};

export default Blog;
