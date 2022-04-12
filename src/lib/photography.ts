import fs from "fs";
import path from "path";

const photographyDirectory = path.join(process.cwd(), "public/photography");

// todo:
export function getPhotography({ limit }: { limit?: number } = {}) {
  // Get file names under /posts
  let fileNames = fs.readdirSync(photographyDirectory);

  if (limit) {
    fileNames = fileNames.slice(0, limit);
  }

  return fileNames;
  // const allPostsData = fileNames.map((fileName) => {
  //   // Remove ".mdx" from file name to get id
  //   const id = fileName.replace(/\.mdx$/, "");

  // Read markdown file as string
  //   const fullPath = path.join(postsDirectory, fileName);
  //   const fileContents = fs.readFileSync(fullPath, "utf8");

  //   // Use matter to parse the post metadata section
  //   const matterResult = matter(fileContents);

  //   // Combine the data with the id
  //   return {
  //     id,
  //     ...matterResult.data,
  //   };
  // }) as Array<{ id: string; date: string; title: string }>;

  // // Sort posts by date
  // return allPostsData.sort(({ date: a }, { date: b }) => {
  //   if (a < b) {
  //     return 1;
  //   } else if (a > b) {
  //     return -1;
  //   } else {
  //     return 0;
  //   }
  // });
}
