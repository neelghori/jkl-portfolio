"use client";
import React, { useState } from "react";
import Container from "@JklPortfolio/components/container/Container";
import { JSON_DATA } from "@JklPortfolio/data/data";
import Button from "@JklPortfolio/components/UI/Button";
import BlogCard from "./BlogCard";
import useBlog from "@JklPortfolio/hooks/useBlog";

const BlogCardContainer = () => {
  const { visible, loadMorePosts, blogList } = useBlog();
  return (
    <Container classname="flex flex-col gap-12 lg:gap-16">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-12 ">
        {blogList &&
          blogList.slice(0, visible).map((element, index) => {
            return <BlogCard {...element} key={index} />;
          })}
      </div>
      {visible < blogList.length && (
        <div className="flex justify-center">
          <Button onClickHandler={loadMorePosts}>Load More</Button>
        </div>
      )}
    </Container>
  );
};

export default BlogCardContainer;
