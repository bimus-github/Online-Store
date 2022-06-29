import { Link } from "react-router-dom";

function SingIn() {
  return (
    <div className=" w-full h-full items-center flex justify-center">
      <Link to="/api">
        <button className=" rounded-md px-5 py-2 bg-blue-400 hover:scale-105 transition transform duration-200 text-white font-medium">
          Open Site
        </button>
      </Link>
    </div>
  );
}

export default SingIn;
