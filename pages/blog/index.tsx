import { useState } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";

import Layout from "../../components/layout";
import Container from "../../components/container";
import { getAllPosts } from "../../lib/api";
import { CMS_NAME, CMS_URL } from "../../lib/constants";
import PostPreview from "../../components/post-preview";
import Link from "next/link";
import Intro from "../../components/intro";

export default function Posts({ initialPosts, preview }) {
  const [posts, setPosts] = useState(initialPosts.edges);
  const [pageInfo, setPageInfo] = useState(initialPosts.pageInfo);
  const [loading, setLoading] = useState(false);

  const loadMorePosts = async () => {
    setLoading(true);
    const newPosts = await getAllPosts(preview, pageInfo.endCursor);
    setPosts([...posts, ...newPosts.edges]);
    setPageInfo(newPosts.pageInfo);
    setLoading(false);
  };

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Intro />
        <div className="grid grid-cols-3 gap-12">
          {posts.map(({ node }) => (
            <PostPreview
              key={node.slug}
              title={node.title}
              coverImage={node.featuredImage}
              date={node.date}
              author={node.author}
              slug={node.slug}
              excerpt={node.excerpt}
            />
          ))}
        </div>
        <div className="flex justify-center my-16">
          {pageInfo.hasNextPage && (
            <button
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              onClick={loadMorePosts}
              disabled={loading}
            >
              {loading ? "Loading..." : "Load More Posts"}
            </button>
          )}
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const initialPosts = await getAllPosts(preview);

  return {
    props: { initialPosts, preview },
    revalidate: 10,
  };
};
