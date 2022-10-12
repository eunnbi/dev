import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "data", "posts");

export const getSortedPostsData = (): Post[] => {
  const folders = fs.readdirSync(postsDirectory);
  let allPostsData: Post[] = [];
  for (let i = 0; i < folders.length; i++) {
    const directory = path.join(postsDirectory, folders[i]);
    const fileName = fs.readdirSync(directory).filter((file) => {
      const nameArr = file.split(".");
      const extension = nameArr[nameArr.length - 1];
      if (extension === "md") return true;
      else return false;
    });
    const fullPath = path.join(directory, fileName[0]);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { content, data } = matter(fileContents);
    //console.log(matterResult);
    const metadata = data as PostMetadata;
    allPostsData = [...allPostsData, { id: folders[i], ...metadata, content }];
  }

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};
