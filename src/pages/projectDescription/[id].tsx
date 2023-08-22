import Layout from "@/components/layout/Layout";
import projectList, { IContent } from "@/data/projectList";
import { GetServerSideProps } from "next";
import Container from "@/components/layout/Container";

const ProjectsDescription: React.FC<IProps> = ({ project }) => {
  return (
    <Layout>
      <div className="mt-[90px] flex md:justify-between md:items-center">
        <Container>
          <section className="flex flex-col justify-center items-center relative md:ml-28">
            <div className="h-[150px] w-full md:w-[1000px] bg-primary md:-mr-[15.6rem]">
              <h1 className="text-4xl font-bold text-white">
                {project?.heading}
              </h1>
            </div>
            <div className="hidden md:block h-[350px] w-[800px] absolute bg-primary -z-10 left-0 bottom-0 opacity-40"></div>
            <div className="top-10">
              <img src={project?.image_1} alt="" className="h-[500px] w-[1250px] object-cover"/>
            </div>
          </section>
          <section className="mx-[6.4rem]">
          <h2 className="text-xl font-semibold bg-primary text-white w-56 px-4 rounded-xl mt-10">
            About the project
          </h2>
          <div className="mt-10 bg-light rounded-xl p-4">
            <p className="text-sm">{project?.description_1}</p>
          </div>
            <div className="mt-10">
              <img src={project?.image_2} alt="" />
            </div>
            <p className="mt-10 bg-light rounded-xl p-4 text-sm mb-10">{project?.description_2}</p>
          </section>
        </Container>
      </div>
    </Layout>
  );
};
export default ProjectsDescription;
interface IProps {
  project: IContent;
}

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context
) => {
  const id = context.query.id;
  const project: IContent | undefined = projectList.find(
    (proj) => proj.id === id
  );
  console.log(project);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project },
  };
};
