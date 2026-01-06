import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CohortClass from "@/components/sections/CohortClass";
import Faq from "@/components/sections/Faq";
import Testimonial from "@/components/sections/Testimonial";
import Order from "@/components/sections/Order";
import Private from "@/components/sections/Private";

function getHomeData() {
  const filePath = path.join(process.cwd(), "content", "home.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return data;
}

export default function Home() {
  const data = getHomeData();

  return (
    <main className="pt-14 md:pt-0 overflow-x-hidden">
      {/* HERO SECTION */}
      <Hero data={data.hero} />

      {/* ABOUT SECTION */}
      <About data={data.about} />

      {/* COHORT SECTION */}
      <CohortClass data={data.cohort} />

      {/* PRIVATE CLASS SECTION */}
      <Private data={data.private_section} />

      {/* ORDER FORM SECTION */}
      <Order data={data.private_section} />

      {/* TESTIMONIAL SECTION */}
      <Testimonial data={data.testimonial} />

      {/* FAQ SECTION */}
      <Faq data={data.faq_section} />
    </main>
  );
}
