import Image from "next/image";
interface IContent {
  image: string;
  text: string;
  date: string;
  heading: string;
}
const content: IContent[] = [
  {
    image: "/images/bg_1.jpg",
    text: "Blog |",
    date: " July 26,2023",
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    image: "/images/bg_1.jpg",
    text: "Blog",
    date: "July 26,2023",
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    image: "/images/bg_1.jpg",
    text: "Blog",
    date: "July 26,2023",
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    image: "/images/bg_1.jpg",
    text: "Blog",
    date: "July 26,2023",
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    image: "/images/bg_1.jpg",
    text: "Blog",
    date: "July 26,2023",
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

const Blogs: React.FC = () => {
  return (
    <>
      <div className="bg-blogs background-contrast-50 h-screen w-full bg-fixed relative">
        <div className="bg-primary h-full w-full flex justify-center items-center absolute opacity-75 overflow-hidden"></div>
        <div className=" absolute w-full h-full flex justify-center items-center ">
          <div className="-mb-[300px] shadow-xl flex flex-col gap-20">
            <h1 className=" text-[80px] text-white font-extrabold ">Blogs</h1>
            <div className="h-[700px] w-full bg-white flex justify-start items-center gap-9">
              {/* main display */}
              <div className="h-[600px] w-[400px] ml-9 p-8">
                <div className="flex justify-center items-center flex-col gap-8">
                  <div className="shadow-xl rounded-xl overflow-hidden">
                    <img src={content[0].image} alt="" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-start items-center flex-row">
                      <p className="text-[20px]">{content[0].text}</p>
                      <p>{content[0].date}</p>
                    </div>
                    <h1 className="text-[40px] font-semibold leading-9">{content[0].heading}</h1>
                    <h2>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempora autem itaque saepe incidunt quae pariatur odit
                      similique labore unde in inventore, excepturi doloribus
                      qui tenetur veritatis! Quo perferendis natus sit.
                    </h2>
                  </div>
                </div>
              </div>
              {/* second display */}
              <div className="h-[200px] w-[600px] flex flex-col justify-center items-center gap-9 mt-10">
                {content.slice(1).map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-center items-center flex-row gap-9">
                      <div className="shadow-xl rounded-xl">
                        <Image src={item.image} alt="" width={300} height={400}/>
                      </div>
                      <div>
                        <div>
                          <p className="text-[20px] text-[#F2864A]">{item.text}</p>
                          <p>{item.date}</p>
                        </div>
                        <h1 className="text-[30px] leading-8">{item.heading}</h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blogs;
