import React from "react";
import TaskList from "../../components/TaskList";

const TaskPage = () => {
  return (
    <div className="bg-light-primary p-4 h-full">
      <div className="flex flex-col h-full">
        <div className="bg-lighter-grey flex flex-row items-center justify-between font-semibold py-3">
          <div className="w-2/12 md:w-1/20 pl-2">DP</div>
          <div className="w-6/12 md:w-3/20">Assigned to</div>
          <div className="hidden md:flex w-3/20">Department</div>
          <div className="hidden md:flex w-3/20">Task</div>
          <div className="w-4/12 md:w-3/20">Priority</div>
          <div className="hidden md:flex w-3/20">Status</div>
          <div className="hidden md:flex w-3/20">startDate</div>
          <div className="w-1/12 md:w-1/20"></div>
        </div>

        {/* passing in demo tasks -> do add in the urls */}
        <TaskList
          tasks={[
            {
              assgnto: "Assignee name",
              department: "Department",
              title: "Task name",
              priority: "High",
              status: 1,
              startDate: "12-2-2023",
              color: "red",
            },
            {
              assgnto: "Assignee name",
              department: "Department",
              title: "Task name",
              priority: "High",
              status: 2,
              startDate: "12-2-2023",
              color: "red",
            },
            {
              assgnto: "Assignee name",
              department: "Department",
              title: "Task name",
              priority: "Medium",
              status: 3,
              startDate: "12-2-2023",
              color: "yellow",
            },
            {
              assgnto: "Assignee name",
              department: "Department",
              title: "Task name",
              priority: "Low",
              status: 3,
              startDate: "12-2-2023",
              color: "blue",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default TaskPage;
