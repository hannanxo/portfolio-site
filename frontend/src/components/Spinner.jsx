import React from "react";

const Spinner = () => {
  return (
    <>
      <button type="button" className="bg-[#ff4655] ..." disabled>
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Processing...
      </button>
    </>
  );
};

export default Spinner;
