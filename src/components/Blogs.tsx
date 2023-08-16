import BlogsInnerSection from "./BlogsInnerSection";
import Container from "./layout/Container";
const Blogs: React.FC = () => {
  return (
    <div className="h-[1100px] w-full">
      <div className="h-[700px] bg-blogs background-contrast-50 bg-no-repeat bg-fixed bg-cover relative">
        <div className="bg-primary h-full w-full flex justify-center items-center absolute opacity-75 overflow-hidden"></div>
        <Container>
          <div className="relative">
          <BlogsInnerSection />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Blogs;
