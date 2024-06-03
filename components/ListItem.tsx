import React from "react";
import Link from "next/link";
import getFormattedDate from "/Users/yasindavids/Desktop/JS/blog-app/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 text-xl">
      <Link className="text-green-700 hover:underline" href={`/posts/${id}`}>
        {title}
      </Link>
      <br />
      <p className="text-sm mt-0">{formattedDate}</p>
    </li>
  );
}
