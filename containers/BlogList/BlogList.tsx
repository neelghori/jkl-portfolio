import React from "react";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import BlogCardContainer from "@JklPortfolio/components/BlogCard/BlogCardContainer";

const BlogList = () => {
  return (
    <section className="pb-20 lg:pt-10 relative">
      <BackgroundImage />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 lg:top-24 w-full pb-10">
        <BlogCardContainer />
      </div>
    </section>
  );
};

export default BlogList;
