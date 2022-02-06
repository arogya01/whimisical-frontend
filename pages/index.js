import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet' />
      </Head>
      <Navbar />
    </div>
  );
}
