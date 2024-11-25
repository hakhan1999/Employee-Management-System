import React from "react";
import Header from "../Others/Header";
import TaskListNumbers from "../Others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div>
          <Header />
          <TaskListNumbers />
          <TaskList/>
    </div>
  );
};

export default EmployeeDashboard;
