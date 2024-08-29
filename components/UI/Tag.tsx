import { TagProps } from "@JklPortfolio/types/components/ui";
import React from "react";

const Tag: React.FC<TagProps> = (props) => {
  return (
    <div
      className={`px-[12px] py-[4px] rounded-[16px] bg-secondary text-textsm text-body`}
    >
      {props.label}
    </div>
  );
};

export default Tag;
