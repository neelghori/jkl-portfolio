import { BlogContext } from "@JklPortfolio/Context/BlogContext";
import { JSON_DATA } from "@JklPortfolio/data/data";
import { useContext, useState } from "react";

const useBlog = () => {
  const { blogList, setBlogList } = useContext(BlogContext);
  const [visible, setVisible] = useState(9);
  const loadMorePosts = () => {
    setVisible((prevVisible) => prevVisible + 5); // Load 5 more posts
  };
  const SearchHandler = (searchval: string) => {
    const searchText = searchval.toLowerCase();
    const filterBlogList = JSON_DATA.filter(
      (element) =>
        element.blog_title.toLowerCase().includes(searchText) ||
        element.blog_description.toLowerCase().includes(searchText) ||
        element.tag.toLowerCase().includes(searchText) ||
        element.author.name.toLowerCase().includes(searchText)
    );
    setBlogList([...filterBlogList]);
  };
  return {
    visible,
    loadMorePosts,
    blogList,
    setBlogList,
    SearchHandler,
  };
};

export default useBlog;
