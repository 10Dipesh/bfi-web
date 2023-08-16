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
const BlogsInnerSection:React.FC = () =>{
    return (
        <div className=" absolute w-full h-full flex justify-center items-start">
        <div className="shadow-xl flex flex-col gap-20 mt-10">
          <h1 className=" text-6xl text-white font-extrabold ">Blogs</h1>
          <div className="h-[700px] w-full bg-white flex justify-start items-center gap-9">
            {/* main display */}
            <div className="h-[600px] w-[500px] ml-9 p-8">
              <div className=" w-full flex justify-center items-center flex-col gap-8">
                <div className="shadow-xl rounded-xl overflow-hidden">
                  <img src={content[0].image} alt="" />
                </div>
                <article className="flex flex-col gap-4">
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
                </article>
              </div>
            </div>
            {/* second display */}
            <div className=" flex flex-col p-5">
              {content.slice(1).map((item, index) => (
                <div key={index}>
                  <div className="w-full h-[150px] flex justify-center items-center flex-row gap-9">
                    <div className="shadow-xl rounded-xl">
                      <Image src={item.image} alt="" width={150} height={200}/>
                    </div>
                    <article>
                      <div>
                        <p className="text-xl text-[#F2864A]">{item.text}</p>
                        <p>{item.date}</p>
                      </div>
                      <h1 className="text-xl">{item.heading}</h1>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
    )
}
export default BlogsInnerSection;