import React from "react";
import { blogData } from "../data/blogData.js";
const Blogs = () => {
  const blogs = blogData;
  return (
    <div name="blogs" className="sm:px-8  bg-[#e1e1e1] py-[100px] md:py-[100px]">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header>
              <p className="text-4xl font-bold inline border-b-4 text-[#0f1923] border-[#ff4655] leading-normal">Blogs</p>
              <p className="py-6  text-[#768079] w-auto">
                These blogs are dedicated to all things tech. From getting started tutorials to discussions on emerging technologies and best practices for developers, my goal is to provide valuable
                insights and practical advice to my readers.
              </p>
            </header>
            <div className="mt-7">
              <div className="md:border-l md:border-[#ff4655] md:pl-6 border-zinc-700/40">
                <div className="flex max-w-3xl flex-col space-y-16">
                  {blogs.map((item, index) => (
                    <div key={index} className="group md:grid md:grid-cols-4 md:items-baseline hover:scale-100 duration:500 ">
                      <div className="md:col-span-3 group relative flex flex-col items-start ">
                        <h2 className="text-base font-semibold tracking-tight text-zinc-800">
                          <span className="relative text-[#27272a]">{item.title}</span>
                        </h2>
                        <p className="relative mt-2 text-sm text-zinc-400">{item.desc}</p>
                        <a aria-hidden="true" className="relative mt-4 flex items-center text-sm font-medium text-teal-500" href="/">
                          Read article
                          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                            <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </a>
                      </div>
                      <span className="mt-1 md:block relative order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
