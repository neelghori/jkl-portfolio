import Image from "next/image";
import React from "react";

const BackgroundImage = () => {
  return (
    <div className="relative">
      <div className="relative w-full h-52 lg:h-[600px]">
        <Image src={"/background.svg"} alt="background" layout="fill" />
      </div>
    </div>
  );
};

export default BackgroundImage;
