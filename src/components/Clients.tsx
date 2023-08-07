interface IContent {
  text: string;
  image: string;
}

const Content: IContent[] = [
  {
    text: "Kathmandu municapality",
    image: "/images/krishnanagarmun-logo.png",
  },
  {
    text: "Client2",
    image: "/images/bigu-logo.png",
  },
  {
    text: "Client3",
    image: "/images/bigu-logo.png",
  },
  {
    text: "Client4",
    image: "/images/bigu-logo.png",
  },
  {
    text: "Client4",
    image: "/images/bigu-logo.png",
  },
  {
    text: "Client4",
    image: "/images/bigu-logo.png",
  },
];
const Clients: React.FC = () => {
  return (
    <div className="w-full h-[800px] flex justify-center items-center bg-primary mt-[5rem]">
      <div className="flex flex-col justify-center items-center w-[1100px] gap-5">
        <h1 className="font-extrabold text-[80px] text-primary text-white">
          Our Clients
        </h1>
        <p className=" text-[20px] text-center">
          We have successfully completed a wide variety of project with highest
          customer satisfaction. Here we present some of our recent projects.
        </p>
        <div className="grid grid-cols-4 gap-4 my-5 ">
          {Content.map((item, index) => (
            <div className="h-[250px] w-[250px] shadow drop-shadow-lg rounded-[20px] mb-4 bg-white p-4">
              <div key={index}>
                <img src={item.image} alt="" />
              </div>
              <div key={index}>
                <p className="text-[20px] text-center">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Clients;
