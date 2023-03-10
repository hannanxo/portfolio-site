import React, { useEffect } from "react";
import RenderProject from "./RenderProject";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import { getProjects, reset } from "../features/projects/projectSlice";

const ProjectSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { projects, isLoading, isError, message } = useSelector(state => state.projects);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getProjects());
    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#ececec] py-[84px] md:py-0">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 text-[#0f1923] border-[#ff4655] leading-normal">Projects</p>
          <p className="pt-6  text-[#768079]">Check out some of my recent work</p>
        </div>

        <div className="mt-4">
          <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2s">
            {projects.map(project => (
              <RenderProject key={project._id} project={project} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
