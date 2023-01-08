import React from "react";
import Avatar from "./Avatar";
import Statusbar from "./Statusbar";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks?.map((task) => {
        return (
          <div
            className="bg-white flex flex-row items-center justify-between py-2"
            key={Math.random().toString()}
          >
            <div className="w-2/12 md:w-1/20 items-center justify-center pl-2">
              {/* Add avatars after adding the imgs/static assets */}
              {/* <Avatar url={task.dp} /> */}
            </div>
            <div className="w-6/12 md:w-3/20">{task.assgnto}</div>
            <div className="hidden md:flex w-3/20"> {task.department} </div>
            <div className="hidden md:flex w-3/20">{task.title}</div>
            <div className={`w-4/12 text-${task.color}-500 md:w-3/20`}>
              {task.priority}
            </div>
            <div className="hidden md:flex w-3/20">
              <Statusbar num={task.status} />
            </div>
            <div className="hidden md:flex w-3/20"> {task.startDate} </div>
            <div className="w-1/12 md:w-1/20 pl-0 sm:pl-3 md:pl-6">...</div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
