import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const App = () => {
  const [val ,setVal] = useState(false)
  return (
    <div className=" w-full h-screen bg-zinc-300 flex items-center justify-center">
      <div className="h-39 w-71  relative rounded-md flex overflow-hidden ">
        <img className={`h-full w-full transition-transform ${val === false ? '-translate-x-[0%]' : '-translate-x-[100%]' } object-cover shrink-0`}
          src="https://images.unsplash.com/photo-1751378639257-0aca1af0089b?q=80&w=805&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img className={`h-full w-full transition-transform ${val === false ? '-translate-x-[0%]' : '-translate-x-[100%]' } object-cover shrink-0`}
          src="https://images.unsplash.com/photo-1599932566288-33d57caf0cde?q=80&w=754&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span onClick={()=>setVal(()=>!val)} className="absolute bottom-[15%] left-[43%] cursor-pointer h-fit w-fit bg-[#dadadab7] rounded-full p-3">
        <FaArrowRight />
        </span>
      </div>
    </div>
  );
};

export default App;
