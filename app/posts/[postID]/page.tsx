import React from "react";
import {
  getSortedPosts,
  getPostsData,
} from "/Users/yasindavids/Desktop/JS/blog-app/lib/posts";
import { notFound } from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

export function GenerateMetadata({ params }: { params: { postID: string } }) {
  const posts = getSortedPosts();
  const { postID } = params;
  const post = posts.find((post) => post.id === postID);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postID: string } }) {
  "use server";

  const posts = getSortedPosts();
  const { postID } = params;
  if (!posts.find((post) => post.id === postID)) {
    return notFound;
  }
  const { title, date, contentHtml } = await getPostsData(postID);

  const pubDate = getFormattedDate(date);

  return (
    <main className="mt-8 prose prose-xl text-black mx-auto">
      <p>
        <Link
          className="text-green-700 no-underline hover:underline mb-0"
          href="/"
        >
          Back to home
        </Link>
      </p>
      <div className="mt-0">
        <h1 className="text-black text-3xl mt-0 mb-1">{title}</h1>
        <p className="mt-0 text-sm">{pubDate}</p>
        <article>
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
      </div>
    </main>
  );
}
