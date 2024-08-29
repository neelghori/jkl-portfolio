import { TagProps } from "@JklPortfolio/types/components/ui";
import React from "react";

const Tag: React.FC<TagProps> = (props) => {
  return (
    <div className={`px-3 py-1 rounded-2xl bg-secondary text-textsm text-body`}>
      {props.label}
    </div>
  );
};

export default Tag;
