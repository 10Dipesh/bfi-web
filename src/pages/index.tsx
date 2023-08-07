import Layout from "@/components/layout/Layout";
import ImageCarousel from "@/components/ImageCarousel";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <Layout>
      <ImageCarousel />
      <Projects />
    </Layout>
  );
}
