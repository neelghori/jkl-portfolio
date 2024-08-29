import Container from "@JklPortfolio/components/container/Container";
import Input from "@JklPortfolio/components/UI/Input";
import React from "react";
import BlogHeading from "../BlogHeading/BlogHeading";

const HeroSection = () => {
  return (
    <section className="py-section">
      <Container classname="flex flex-col gap-10">
        <BlogHeading />
        <div className="flex justify-center">
          <Input type="text" name="search" placeholder="Search" />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
