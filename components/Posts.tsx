import React from "react";
import { getSortedPosts } from "../lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPosts();

  return (
    <section className=" mt-8 mx-auto max-w-md">
      <h2 className="font-bold text-3xl ">Blog</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
