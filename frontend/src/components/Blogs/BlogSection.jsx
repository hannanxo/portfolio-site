import React, { useEffect } from "react";
import RenderBlog from "./RenderBlog";
import LoginAlert from "../LoginAlert";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import Spinner from "../Spinner";
import { getBlogs, reset } from "../features/blogs/blogSlice";

const BlogSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.auth);
  const { blogs, isLoading, isError, message } = useSelector(state => state.blogs);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getBlogs());
    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  // if (isLoading) {
  //   return <Spinner />;
  // }
  return (
    <div name="blogs" className="sm:px-8  bg-[#fafafa] py-[100px] md:py-[100px]">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header>
              <p className="text-4xl font-bold inline border-b-4 text-[#0f1923] border-[#ff4655] leading-normal">Blogs</p>
              <p className="py-6  text-[#768079] w-auto">
                These blogs are dedicated to all things tech. From getting started tutorials to discussions on emerging technologies and best practices for developers, my goal is to provide valuable
                insights and practical advice to my readers.
              </p>

              {!user ? <LoginAlert /> : null}
            </header>
            <div className="mt-7">
              <div className="md:border-l md:border-[#ff4655] md:pl-6 border-zinc-700/40">
                <div className="flex max-w-3xl flex-col space-y-16">
                  {blogs.map(blog => (
                    <RenderBlog key={blog._id} blog={blog} />
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

export default BlogSection;
