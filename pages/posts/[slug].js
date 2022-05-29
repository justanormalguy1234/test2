import React from "react";
import Markdown from "markdown-to-jsx";
import { fetchData } from "../../lib/api";
import Image from "next/image";
import { motion } from "framer-motion";
import { getStrapiMedia } from "../../lib/media";
export default function Post({ post }) {
  const { medium } = post.featuredImg.data.attributes.formats;
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className="w-screen h-screen flex justify-center bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <div className="max-w-[500px] mx-auto text-white">
          <h1 className="text-6xl font-black">{post.title}</h1>
          <h2 className="text-2xl font-thin">{post.description}</h2>
          <Image
            src={getStrapiMedia(medium.url)}
            alt="featured image"
            height={medium.height}
            width={medium.width}
            objectFit="contain"
          ></Image>
          <Markdown>{post.text}</Markdown>
        </div>
      </div>
    </motion.div>
  );
}

export async function getStaticPaths() {
  const pathsraw = await fetchData("/api/blogposts?fields=slug");
  const paths = pathsraw.data.map((item) => {
    return {
      params: { slug: item.attributes.slug },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const blogdataraw = await fetchData(
    `/api/blogposts?filters[slug]=${slug}&populate=%2A`
  );
  const blogdata = blogdataraw.data[0].attributes;
  return {
    props: {
      post: blogdata,
    },
    revalidate: 120,
  };
};
