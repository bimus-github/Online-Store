import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { DotsVerticalIcon } from "@heroicons/react/solid";

const routers = [
  { path: "/api", title: "Home" },
  { path: "/api/categories", title: "Category" },
  { path: "/api/allProducts", title: "All Products" },
];

interface Props {
  children: JSX.Element;
}

function AppLayout({ children }: Props) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => {
        if (open) {
          setOpen(false);
        }
      }}
      className="w-full h-screen sticky "
    >
      <header className="grid grid-cols-2 md:p-9 p-5 shadow-md text-xs md:text-base">
        {/* left */}

        <div className="font-medium cursor-pointer">
          <p className=" hover:scale-105 transition transform duration-200">
            Logo
          </p>
        </div>

        {/* right */}

        <div className="font-medium justify-end flex items-center gap-5">
          {routers.map((route, index) => {
            const classes =
              location.pathname === route.path
                ? "text-blue-500 font-bold text-lg"
                : "";
            return (
              <button
                key={index.toString()}
                className={`${classes}hover:scale-105 transition transform duration-200`}
              >
                <Link to={route.path}>{route.title}</Link>
              </button>
            );
          })}

          <DotsVerticalIcon
            onClick={() => setOpen(!open)}
            className="h-5 md:h-6 hover:scale-105 transition transform duration-200"
          />
        </div>

        {open && (
          <div className="absolute md:top-20 right-4 top-14 grid grid-cols-1 gap-2 bg-gray-100 shadow-md md:py-8 md:px-2 py-5 px-1  rounded font-medium">
            <button
              className="p-1 text-purple-500 bg-white rounded-md  shadow-md hover:scale-105
          transition transform duration-200"
            >
              Add Acount
            </button>
            <button
              className="p-1 text-purple-500 bg-white rounded-md  shadow-md hover:scale-105
          transition transform duration-200"
            >
              Add New Product
            </button>
            <button
              className="p-1 text-purple-500 bg-white rounded-md  shadow-md hover:scale-105
          transition transform duration-200"
            >
              Share
            </button>
            <button
              className="p-1 text-purple-500 bg-white rounded-md  shadow-md hover:scale-105
                transition transform duration-200"
            >
              <Link to="/">Sing Out</Link>
            </button>
          </div>
        )}
      </header>
      <div className="p-10">{children}</div>
    </div>
  );
}

export default AppLayout;
