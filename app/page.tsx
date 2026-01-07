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

type HeroData = { title: string; subtitle: string } | undefined;
type AboutData = { paragraf_1: string; paragraf_2: string } | undefined;

function getSectionData(filename: string): Record<string, unknown> | undefined {
  const filePath = path.join(process.cwd(), "content", `${filename}.md`);

  if (!fs.existsSync(filePath)) return undefined;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return data as Record<string, unknown> | undefined;
}

export default function Home() {
  const heroData = getSectionData("hero");
  const aboutData = getSectionData("about");
  const cohortData = getSectionData("cohort");
  const privateData = getSectionData("private");
  const testimonialData = getSectionData("testimonial");
  const faqData = getSectionData("faq");

  return (
    <main className="pt-14 md:pt-0 overflow-x-hidden">
      {/* HERO SECTION */}
      <Hero data={(heroData as HeroData) || { title: "", subtitle: "" }} />

      {/* ABOUT SECTION */}
      <About
        data={(aboutData as AboutData) || { paragraf_1: "", paragraf_2: "" }}
      />

      {/* COHORT SECTION */}
      <CohortClass data={cohortData} />

      {/* PRIVATE CLASS SECTION */}
      <Private data={privateData} />

      {/* ORDER FORM SECTION */}
      <Order data={privateData} />

      {/* TESTIMONIAL SECTION */}
      <Testimonial data={testimonialData} />

      {/* FAQ SECTION */}
      <Faq data={faqData} />
    </main>
  );
}
