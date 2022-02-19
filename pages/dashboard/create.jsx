import Head from "next/head";
import dynamic from "next/dynamic";
import Editor from "../../components/Editor";
// let Editor = dynamic (() => import("../../components/Layout"),{
//     ssr:false
// });

export default function CreateBlog(){
    return(
        <div>
        <h1>Hello there</h1>
        <Editor />
        </div>
    )
}