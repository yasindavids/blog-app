import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "blogposts");
const fm = require("front-matter");

export function getSortedPosts() {
  // Get file names under posts
  const fileNames = fs.readdirSync(postsDirectory);
  //Store allPosts data
  const allPostsData = fileNames.map((fileName) => {
    // Remove '.md' from filenames
    const id = fileName.replace(/\.md$/, "");

    //grab path of file
    const fullPath = path.join(postsDirectory, fileName);
    //read file
    const fileContents = fs.readFileSync(fullPath, "utf8");
    //parse the file
    const matterResult = fm(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.attributes.title,
      date: matterResult.attributes.date,
    };
    return blogPost;
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
