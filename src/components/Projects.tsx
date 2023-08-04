import Link from "next/link";
const Projects = () => {
  return (
    <div className="flex flex-col h-[80vh] w-full md:w-[100%] overflow-hidden border-4 border-black justify-center items-center gap-5 mt-5">
      <h1 className="text-black text-4xl font-extrabold">Projects</h1>
      <div className="flex justify-center items-center gap-5">
        <Link href="/projects/running">
          <div className="h-[40vh] w-[80vw] md:w-[30vw] border-4 border-black p-5 transition-all duration-300 ease-in-out transform hover:scale-105">
            <p>
              <span className="text-green text-bold">Running</span> Projects
            </p>
          </div>
        </Link>
        <Link href="/projects/completed">
          <div className="h-[40vh] w-[80vw] md:w-[30vw] border-4 border-black p-5 transition-all duration-300 ease-in-out transform hover:scale-105">
            <p>
              <span className="text-red text-bold">Completed</span> Projects
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
