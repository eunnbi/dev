import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "data", "posts");

export const getSortedPostsData = (options?: { size?: number }): Post[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const { content, data } = matter(fileContents);
    const metadata = data as PostMetadata;
    return {
      id,
      ...metadata,
      content
    };
  });

  // Sort posts by date
  allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });

  return options && options.size
    ? allPostsData.slice(0, options.size)
    : allPostsData;
};

export const getPostSlugs = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const slugs = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, "");
    return { params: { slug } };
  });
  return slugs;
};

export const getPostData = (slug: string): Post => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  // Use gray-matter to parse the post metadata section
  const { content, data } = matter(fileContents);
  //console.log(matterResult);
  const metadata = data as PostMetadata;
  return {
    id: slug,
    ...metadata,
    content
  };
};

export const getPostCategories = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const categories = fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const { data } = matter(fileContents);
    const metadata = data as PostMetadata;
    return metadata.category;
  });
  return [
    ...categories.filter(
      (category, index) => categories.indexOf(category) === index
    )
  ];
};
