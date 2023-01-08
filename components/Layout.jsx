import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const path = router.pathname;

  const EmployeeSubpages = [
    {
      name: "All",
      route: "",
    },
    {
      name: "Administrators",
      route: "/admin",
    },
  ];
  const TaskSubpages = [
    {
      name: "Task Page",
      route: "",
    },
    {
      name: "TaskSubpage1",
      route: "/tsp1",
    },
  ];
  const MainSubpages = [
    {
      name: "Task",
      route: "/task",
    },
    {
      name: "Employee",
      route: "/employee",
    },
  ];

  let sideProps;
  let pageRoute;
  let pageName;
  let hidden;

  if (path.startsWith("/employee")) {
    sideProps = EmployeeSubpages;
    pageRoute = "/employee";
    pageName = "Employee";
  } else if (path.startsWith("/task")) {
    sideProps = TaskSubpages;
    pageRoute = "/task";
    pageName = "Tasks";
    hidden = true;
  } else if (path.startsWith("/")) {
    sideProps = MainSubpages;
    pageRoute = "";
    pageName = "Home";
  }

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-row flex-1">
        <Sidebar
          sideProps={sideProps}
          pageRoute={pageRoute}
          pageName={pageName}
          hidden={hidden}
        />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
