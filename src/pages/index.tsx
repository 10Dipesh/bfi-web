import Layout from "@/components/layout/Layout";
import ImageCarousel from "@/components/ImageCarousel";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import ProjectsHandled from "@/components/ProjectsHandled";
export default function Home() {
  return (
    <Layout>
      <ImageCarousel />
      <Projects />
      <Clients />
      <ProjectsHandled />
    </Layout>
  );
}
