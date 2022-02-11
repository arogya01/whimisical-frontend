import allBlogsData from "../../public/blogs.json";

export default function Posts({postData}) {
    return (
        <div className="flex-col  font-sans border-2 w-80 m-4 ">
          <figure className="border-b-2">
            <Image src={imgSrc} alt="blog picture" width={300} height={180} />
          </figure>
    
          <div className="p-2">
            <h1 className="font-bold text-lg">{blogHeadline} </h1>
            <p className="text-sm">{blogContent}</p>
          </div>
        </div>
      );
}

export async function getStaticPaths() {
  const ids = allBlogsData.map(({ imgUrl, blogHeadline, blogContent }) => {
    return {
      params: {
        id: blogHeadline,
      },
    };
  });

  return {
    ids,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = allBlogsData.filter(({ imgUrl, blogHeadline, blogContent }) => {
    return params.id === blogHeadline;
  });

  return{
      props:{
          postData
      }
  }
}
