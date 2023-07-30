import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "data", "posts");

export interface PostsGetResponse {
  posts: Post[];
  isLastPage?: boolean;
  page: number;
}

export interface PostCategoryItem {
  category: string;
  count: number;
}

export const getSortedPostsData = (options: {
  category?: string;
  size: number;
  page: number;
}): PostsGetResponse => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: Post[] = [];
  for (let i = 0; i < fileNames.length; i++) {
    const fileName = fileNames[i];
    const category = getCategoryFromFileName(fileName);
      if ((options.category && options.category === category) || options.category === undefined) {
        const id = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf-8");
        const { content, data } = matter(fileContents);
        const metadata = data as PostMetadata;
        allPostsData.push({
          id,
          ...metadata,
          content
        });
      }
  }


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
  const start = options.size * options.page;
  return options
    ? {
        posts: allPostsData.slice(start, options.size + start),
        isLastPage: options.size + start >= allPostsData.length,
        page: options.page
      }
    : { posts: allPostsData, page: 0 };
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
  const metadata = data as PostMetadata;
  return {
    id: slug,
    ...metadata,
    content
  };
};

export const getPostCategories = (): PostCategoryItem[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  const categories = fileNames.map(fileName => getCategoryFromFileName(fileName));
  const uniqueCategories = categories.filter(
    (category, index) => categories.indexOf(category) === index
  );
  const result = [];
  result.push({ category: "All", count: categories.length });
  result.push(...uniqueCategories.map(category => {
    const count = categories.reduce(
      (sum, item) => (item === category ? ++sum : sum),
      0
    );
    return {
      category,
      count
    };
  }))
  return result;
};

const getCategoryFromFileName = (fileName: string) => fileName.split("-")[0];
