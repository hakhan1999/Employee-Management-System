import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="flex justify-between gap-5 px-[5rem] py-[3rem]">
      <div className="rounded-[1rem] w-[33.33%] p-[1.5rem] bg-[#1b275a] border border-[#c4cbf5]">
        <h2 className="text-[3rem] font-bold">0</h2>
        <h3 className="text-[1.5rem] font-semibold">New Task</h3>
      </div>
      <div className="rounded-[1rem] w-[33.33%] p-[1.5rem] bg-[#1b275a] border border-[#c4cbf5]">
        <h2 className="text-[3rem] font-bold">3</h2>
        <h3 className="text-[1.5rem] font-semibold">Completed</h3>
      </div>
      <div className="rounded-[1rem] w-[33.33%] p-[1.5rem] bg-[#1b275a] border border-[#c4cbf5]">
        <h2 className="text-[3rem] font-bold">0</h2>
        <h3 className="text-[1.5rem] font-semibold">Accepted</h3>
      </div>
      <div className="rounded-[1rem] w-[33.33%] p-[1.5rem] bg-[#1b275a] border border-[#c4cbf5]">
        <h2 className="text-[3rem] font-bold">0</h2>
        <h3 className="text-[1.5rem] font-semibold">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
