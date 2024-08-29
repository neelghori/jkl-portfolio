import Image from "next/image";
import React from "react";

const BlogCard: React.FC<any> = (props) => {
  return (
    <div className="px-6 pt-6 pb-8 bg-white shadow-md rounded-md flex flex-col gap-8">
      <div>
        <div className="relative w-full h-60">
          <Image
            src={props.imagurl}
            alt={props.blog_title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between h-full gap-8 lg:gap-16">
        <div className="flex flex-col gap-3">
          <p className="text-textsm text-body font-semibold">{props.tag}</p>
          <h3 className="flex gap-4 text-textxl lg:text-displayxs justify-between text-title">
            <span>{props.blog_title}</span>
            <Image
              src={"/arrow.svg"}
              alt="external_link"
              width={24}
              height={24}
            />
          </h3>
          <p className="text-textmd text-para">{props.blog_description}</p>
        </div>
        <div className="flex  gap-3">
          <div>
            <Image
              src={props.author.imageurl}
              alt={props.author.name}
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-textsm text-title">{props.author.name}</p>
            <p className="text-textsm text-para font-normal">
              {props.publish_date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
