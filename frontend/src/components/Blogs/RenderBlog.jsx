import React from "react";
import { useSelector } from "react-redux";

const RenderBlog = ({ blog }) => {
  const { user } = useSelector(state => state.auth);

  return (
    <>
      <div className="group md:grid md:grid-cols-4 md:items-baseline hover:scale-100 duration:500 ">
        <div className="md:col-span-3 group relative flex flex-col items-start ">
          <h2 className="text-base font-semibold tracking-tight text-zinc-800">
            <span className="relative text-[#27272a]">{blog.title}</span>
          </h2>
          <p className="relative mt-2 text-sm text-zinc-400 px-1 md:px-0 ">{blog.content}</p>
          {user ? (
            <a href={blog.link} aria-hidden="true" className="px-1 md:px-0 relative mt-4 flex items-center text-sm font-medium text-[#ff4655] hover:cursor-pointer">
              Read blog
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </a>
          ) : (
            <div aria-disabled="true" className="px-1 md:px-0 relative mt-4 flex items-center text-sm font-medium text-[#ff4655] opacity-30">
              Sign in to read blog
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className=" h-6 w-6 stroke-current">
                <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
          )}
        </div>
        <span className="px-1 md:px-0 mt-1 md:block relative order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">{blog.date}</span>
      </div>
    </>
  );
};

export default RenderBlog;
