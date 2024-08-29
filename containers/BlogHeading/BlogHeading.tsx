import Tag from "@JklPortfolio/components/UI/Tag";
import React from "react";

const BlogHeading = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <Tag label="Our blog" />
        </div>
        <h1 className="text-displaylg text-heading">Resources and insights</h1>
      </div>
      <div>
        <p className="text-textxl text-body">
          The latest industry news, interviews, technologies, and resources.
        </p>
      </div>
    </div>
  );
};

export default BlogHeading;
