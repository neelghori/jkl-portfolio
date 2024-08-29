import { ButtonProps } from "@JklPortfolio/types/components/ui";
import Image from "next/image";
import React from "react";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div
      className="flex gap-2 bg-secondary px-5 py-3 rounded-lg justify-center items-center cursor-pointer w-full lg:w-auto"
      onClick={props.onClickHandler}
    >
      <div>
        <Image
          src={"/arrow-down.svg"}
          alt="arrow-down"
          width={20}
          height={20}
        />
      </div>
      <button
        {...props}
        className={`text-textmd text-body font-medium ${
          props.classnames ?? ""
        }`}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
