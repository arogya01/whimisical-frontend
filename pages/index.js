import Head from "next/head";
import Image from "next/image";
import BlogCard from "../components/blog-card";
import BlogGrid from "../components/blog-grid";
import Navbar from "../components/navbar";




export default function Home({allBlogsData}) {
  return (
    <div>
     <Head>
       <title>Blog Page</title>
     </Head>
      <Navbar />
      <BlogGrid/>
      
    </div>
  );
}
