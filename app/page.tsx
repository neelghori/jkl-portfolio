import HeroSection from "@JklPortfolio/containers/HeroSection/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="relative">
        <div className="relative w-full h-[600px]">
          <Image src={"/background.svg"} alt="background" layout="fill" />
        </div>
      </div>
    </main>
  );
}
