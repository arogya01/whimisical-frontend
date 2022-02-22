import Head from "next/head";
import Image from "next/image";
import BlogCard from "../components/blog-card";
import BlogGrid from "../components/blog-grid";
import Navbar from "../components/navbar";
import {useState,useEffect} from "react";
import Loader from '../utility/Loader/Loader'

export default function Home({allBlogsData}) {
  
  const [isLoading,setIsLoading] = useState(false);
  
  
  // useEffect(()=>{
  //  setIsLoading(true);
  //  console.log("useEffect is running");
  // const loadingTimer= setTimeout(()=>{
  //     console.log("setTimout Ran");
  //     setIsLoading(false);
  //  },5000);

  //  return(
  //    clearTimeout(loadingTimer)
  //  );
  // });
  
  return (
   isLoading ? ( 
    <Loader  /> 
   ) : (
    <div>
    <Head>
      <title>Blog Page</title>
    </Head>
     <Navbar />
     <BlogGrid/>
     
   </div>
   )
  
  );
}
