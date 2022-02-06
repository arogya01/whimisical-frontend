import Image from "next/image";
import logo from "../public/logo.png";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-around w-full bg-navbar shadow-xl">
      <div className="flex center items-center p-4 ">
        <Image src={logo} alt="picture of the logo" width={42} height={42} />
        <p className="font-bold text-xl">My Ways</p>
      </div>
      <div className="flex justify-between items-center p-4  ">
        <button className="bg-cyan-600 transition-all hover:bg-cyan-400 hover:-translate-y-1 font-bold font-sans p-3 rounded-md mr-8">
          Register
        </button>
        <button className="font-bold font-sans transition-all border-2 p-3 rounded-md border-cyan-600 hover:bg-cyan-600">
          Login
        </button>
      </div>
    </div>
  );
}
