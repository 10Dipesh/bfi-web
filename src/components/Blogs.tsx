
import BlogsInnerSection from "./BlogsInnerSection";
const Blogs: React.FC = () => {
  return (
    <>
    <div className="h-[1100px] w-full">
      <div className="bg-blogs background-contrast-50 h-[700px] bg-no-repeat w-full bg-fixed relative">
        <div className="bg-primary h-full w-full flex justify-center items-center absolute opacity-75 overflow-hidden"></div>
        <BlogsInnerSection />
        </div>
        </div>
    </>
  );
};
export default Blogs;
