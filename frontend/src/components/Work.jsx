import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  const project = data;
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#ececec] py-[84px] md:py-0">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 text-[#0f1923] border-[#ff4655] leading-normal">Work</p>
          <p className="pt-6  text-[#768079]">Check out some of my recent work</p>
        </div>

        <div className="mt-4">
          <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2s">
            {project.map((item, index) => (
              <li key={index} className="group relative flex flex-col items-start py-3 ">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                  <img src={item.Image} alt="x" width="900" height="900" decoding="async" className="h-8 w-7" loading="lazy" />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800">{item.name}</h2>
                <p className="relative mt-2 text-sm  text-zinc-600">{item.desc}</p>
                <p className="relative mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
                    <path
                      d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <a className="ml-2" href={item.github}>
                    {item.github}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
