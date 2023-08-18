import Layout from "@/components/layout/Layout";
import ImageCarousel from "@/components/ImageCarousel";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import ProjectsHandled from "@/components/ProjectsHandled";
import Blogs from "@/components/Blogs";
import News from "@/components/News";
export default function Home() {
  return (
    <Layout>
      <ImageCarousel />
      <Projects />
      <Blogs />
      <Clients />
      <News />
      {/* <ProjectsHandled /> */}
    </Layout>
  );
}
