import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Container from "@/components/layout/Container";
interface IContent {
  image: string;
  name: string;
  position: string;
  gmail: string;
}

const content: IContent[] = [
  {
    image: "/images/person_1.jpg",
    name: "Captian Luffy",
    position: "Captian",
    gmail: "facebook.com",
  },
  {
    image: "/images/person_2.jpg",
    name: "Captian Luffy",
    position: "Captian",
    gmail: "monkeydlyffy01@gmail.com",
  },
  {
    image: "/images/person_3.jpg",
    name: "Captian Luffy",
    position: "Captian",
    gmail: "monkeydlyffy01@gmail.com",
  },
  {
    image: "/images/person_4.jpg",
    name: "Captian Luffy",
    position: "Captian",
    gmail: "monkeydlyffy01@gmail.com",
  },
  {
    image: "/images/person_1.jpg",
    name: "Captian Luffy",
    position: "Captian",
    gmail: "monkeydlyffy01@gmail.com",
  },
  {
    image: "/images/person_3.jpg",
    name: "Captian Luffy",
    position: "Captian",
    gmail: "monkeydlyffy01@gmail.com",
  },
];

export const About: React.FC = () => {
  return (
    <Layout>
      <div className="h-[500px] bg-primary">
        <Container>
          <div className="flex mt-[70px] px-[20px] gap-10 ">
            <div className="w-[60%] flex flex-col justify-start items-start gap-10 p-24">
              <h1 className="text-5xl font-extrabold leading-none text-center text-white">
                Bright Future International Private Limited.
              </h1>
              <p className="text-xl leading-none text-start text-white mt-12">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus ipsa tenetur doloremque, omnis repellendus numquam,
                dolores exercitationem non quae nostrum, est nobis voluptates
                dicta nisi necessitatibus. Odit accusamus perspiciatis ipsum.\
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate, commodi distinctio. Odit aut reprehenderit rerum
                praesentium quo provident, fuga ad omnis necessitatibus id?
                Illum, pariatur voluptates dolorum saepe deserunt consequuntur.
              </p>
            </div>
            <div className="flex-1 relative mt-[50px]">
              <div className=" absolute w-[470px] h-[85%] top-2 bg-light opacity-80"></div>
              <div>
                <img
                  src="/images/bg_2.jpg"
                  alt=""
                  className="absolute w-full h-full object-cover p-9"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="w-full h-[500px]">
      <Container>
      <div className=" flex justify-center items-center">
        <div className="w-[30%] full">
          <Image
            src="/images/bfi6.jpg"
            alt=""
            height={300}
            width={300}
            className="ml-20"
          />
        </div>
        <div className="flex-1 p-20">
          <h1 className="text-6xl font-semibold">About Organization</h1>
          <p className="mt-10 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sapiente, saepe impedit excepturi quae rem eum! Voluptate fugit
            perspiciatis, velit rerum quo deleniti consectetur praesentium
            eveniet inventore natus cumque, excepturi harum! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quaerat, maxime. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Sapiente, saepe impedit
            excepturi quae rem eum! Voluptate fugit perspiciatis, velit rerum
            quo deleniti consectetur praesentium eveniet inventore natus cumque,
            excepturi harum!
          </p>
        </div>
      </div>
      </Container>
      </div>
      {/* our teams */}
      <Container>
      <div className="h-auto w-full flex flex-col justify-center items-center gap-10">
        <h1 className="text-5xl font-extrabold">Board of Directors</h1>
        <div className=" grid grid-cols-4 gap-4">
          {content.map((item, index) => (
            <div
              key={index}
              className="h-[400px] w-[300px] flex flex-col justify-start items-center shadow-xl"
            >
              <div className="p-4">
                <Image src={item.image} alt="" height={400} width={350} />
              </div>
              <h2>{item.name}</h2>
              <p>{item.position}</p>
              <a className="hover:underline" href="mailto:{item.gmail}">
                {item.gmail}
              </a>
            </div>
          ))}
        </div>
      </div>
      </Container>
      {/* location */}
      <div>
        <p>Location</p>
      </div>
    </Layout>
  );
};

export default About;
