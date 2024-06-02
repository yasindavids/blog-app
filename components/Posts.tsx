import React from "react";
import { getSortedPosts } from "../lib/posts";

export default function Posts() {
  const posts = getSortedPosts();

  return (
    <section className="mt-6 mx-auto max-w-md">
      <h2 className="font-bold text-3xl ">Blog</h2>
      <ul className="w-full"> {posts.map((post) => JSON.stringify(post))}</ul>
    </section>
  );
}
