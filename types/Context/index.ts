export interface BlogListType {
  imagurl: string;
  tag: string;
  blog_title: string;
  blog_description: string;
  author: {
    imageurl: string;
    name: string;
  };
  publish_date: string;
}
