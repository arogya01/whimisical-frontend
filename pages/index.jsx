import Head from "next/head";
import Image from "next/image";
import BlogGrid from "../components/blog-grid";
import Navbar from "../components/navbar";
import { useState, useEffect, useContext } from "react";
import Spinner from "../utility/Spinner";
import NavbarBtn from "../utility/navbarBtn";
import { AuthContext } from "../context/authProvider";

export default function Home({ allBlogsData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setMenu] = useState(false);
  const [ userAuth, setUserAuth ] = useContext(AuthContext);  
  
  const checkForExistingUser =async () => {
     let userInfo = localStorage.getItem("userInfo");
     userInfo = JSON.parse(userInfo);
  
     if(userInfo){
       setUserAuth(userAuth);
     }
  }
  
  useEffect(()=>{
    checkForExistingUser();
  },[]);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <Head>
        <title>Blog Page</title>
      </Head>
      <Navbar setMenu={setMenu} isMenuOpen={isMenuOpen} />
      {isMenuOpen ? (
        <ul className="md:hidden w-full flex flex-col justify-center items-center">
          <li className="py-6 flex justify-center items-center  transition ease-in-out delay-150 duration-300">
            <NavbarBtn btnName="dashboard" btnLink="/dashboard" />
          </li>
          <li className="py-6 flex justify-center items-center transition ease-in-out delay-150 duration-300">
            <NavbarBtn btnName="Register" btnLink="/signup" />
          </li>
          <li className="py-6 flex justify-center items-center transition ease-in-out delay-150 duration-300">
            <NavbarBtn btnName="Login" btnLink="/login" />
          </li>
        </ul>
      ) : (
        " "
      )}

      <BlogGrid />
    </>
  );
}
