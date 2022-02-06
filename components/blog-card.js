import Image from "next/image";
import blogOne from "../public/Blog-1.png";

export default function BlogCard({ imgSrc, blogHeadline, blogContent }) {
  <div className="flex-col p-2">
    <Image src={blogOne} alt="blog picture" />
    <h2 className="font-bold font-sans">{blogHeadline}</h2>
    <p className="">{blogContent}</p>
  </div>;
}
