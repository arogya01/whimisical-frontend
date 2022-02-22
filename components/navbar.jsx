import Image from "next/image";
import cauldron from "../public/cauldron.png";
import Link from "next/link";
import NavbarBtn from "../utility/navbarBtn";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-around w-full bg-navbar shadow-xl">
      <div className="flex center items-center justify-center p-4 ">
        <Image src={cauldron} alt="picture of the logo" width={42} height={42} />
        <h1 className="font-bold text-xl mt-2">Whimsical</h1>
      </div>
     
      <div className="flex justify-around items-center p-4 ">
      <NavbarBtn btnName="dashboard" btnLink="/dashboard" />
      <NavbarBtn btnName="Register" btnLink="/signup" />
      <NavbarBtn btnName="Login" btnLink="/login" />
        
      </div>
    </div>
  );
}
