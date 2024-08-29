import { InputProps } from "@JklPortfolio/types/components/ui";
import Image from "next/image";
import React from "react";

const Input: React.FC<InputProps> = (props) => {
  return (
    <div>
      {props.label ? (
        <label
          htmlFor={props.id}
          className="block text-textsm font-medium leading-6 text-gray-900"
        >
          {props?.label}
        </label>
      ) : null}
      <div className="relative mt-2 px-[16px] py-[5px] w-72 rounded-md shadow-sm border-[1px] border-border bg-white">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Image
            src={"/icons/search.svg"}
            alt="search icon"
            width={20}
            height={20}
          />
        </div>
        <input
          {...props}
          className={`block w-full rounded-md border-none placeholder:text-textmd placeholder:text-para outline-none bg-transparent py-1.5 pl-6 text-gray-900 text-textsm ${
            props.classNames ?? ""
          }`}
        />
      </div>
    </div>
  );
};

export default Input;
