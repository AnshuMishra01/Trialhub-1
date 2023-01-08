import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Sidebar = ({ sideProps, pageRoute, pageName, hidden = false }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div
      className={`hidden ${
        hidden === true ? "md:hidden" : "md:flex"
      } flex-col `}
    >
      <div className="mb-4 px-4 font-bold">{pageName}</div>
      {sideProps?.map((el) => (
        <div key={Math.random().toString()}>
          <Link
            href={`${pageRoute + el.route}`}
            className={
              path === `${pageRoute + el.route}`
                ? "bg-light-primary w-full inline-block px-4 py-1"
                : "w-full inline-block px-4 py-1"
            }
          >
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
