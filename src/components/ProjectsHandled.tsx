import React from "react";
import Container from "./layout/Container";
interface IContent {
  count: string;
  text: string;
}
const Content: IContent[] = [
  {
    count: "100",
    text: "Projects Completed",
  },
  {
    count: "96",
    text: "Satisfied Clients",
  },
  {
    count: "12 years +",
    text: "Experience",
  },
];
const ProjectsHandled: React.FC = () => {
  return (
    <div>
      <div className="w-[100%] h-[500px] bg-cover">
        <img
          className="w-screen object-cover h-[100%] blur-sm z-0"
          src="/images/image_6.jpg"
          alt=""
        />
        <Container>
          <div className="relative  flex justify-center items-center">
            <div className="absolute h-[300px] w-[1200px] bg-white z-10 right-0 bottom-[-5rem] rounded-l-[15px]">
              <div className="grid grid-cols-3 ">
                {Content.map((item, index) => (
                  <div className="h-[300px] w-[400px] flex justify-center items-center">
                    <div className="flex flex-col justify-center items-start ml-10">
                      <div
                        key={index}
                        className="text-[60px] font-semibold text-primary"
                      >
                        {item.count}
                      </div>
                      <div className="border-2 border-primary w-[80px]"></div>
                      <h2 className="text-[30px] font-bold mt-5 text-primary">
                        {item.text}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default ProjectsHandled;
