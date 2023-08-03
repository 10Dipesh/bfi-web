import Layout from "@/components/layout/Layout";
import ImageCarousel from "@/components/ImageCarousel";
import Projects from "@/components/Projects";
import InformationCarousel from "@/components/InformationCarousel";
export default function Home() {
  return (
    <Layout>
      <ImageCarousel />
      <Projects />
      <InformationCarousel />
    </Layout>
  );
}
