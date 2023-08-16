import Layout from "@/components/layout/Layout";
import projectList, { IContent } from "@/data/projectList";
import { GetServerSideProps } from "next";
import Container from "@/components/layout/Container";

const ProjectsDescription: React.FC<IProps> = ({ project }) => {
  return (
    <Layout>
      <Container>
      <div>
        <img src={project?.image_1} alt="" />
      </div>
      <h1>{project?.heading}</h1>
      <article>
      <p>{project?.description_1}</p>
      </article>
      <div>
        <img src={project?.image_2} alt="" />
      </div>
      <p>{project?.description_2}</p>
      </Container>
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
