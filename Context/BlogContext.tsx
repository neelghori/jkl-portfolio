"use client";
import { JSON_DATA } from "@JklPortfolio/data/data";
import { ReactChildren } from "@JklPortfolio/types/common";
import { BlogListType } from "@JklPortfolio/types/Context";
import React, { createContext, useState } from "react";

export const BlogContext = createContext<{
  setBlogList: (val: BlogListType[]) => void;
  blogList: BlogListType[];
}>({
  blogList: [],
  setBlogList: () => null,
});

const BlogContextProvider: React.FC<ReactChildren> = (props) => {
  const [blogList, setBlogList] = useState(JSON_DATA);
  return (
    <BlogContext.Provider value={{ blogList, setBlogList }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
