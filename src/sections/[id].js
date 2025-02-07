import { useRouter } from "next/router";

const ProjectDetails = ({ project }) => {
  const router = useRouter();

  // If page is loading
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="project-container">
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <style jsx>{`
        .project-container {
          padding: 2rem;
          text-align: center;
          max-width: 800px;
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;

// 🚀 Next.js Static Generation Setup
export async function getStaticPaths() {
  const projects = [
    { id: "1", title: "Project A" },
    { id: "2", title: "Project B" },
  ];

  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));

  return {
    paths,
    fallback: true, // Enables dynamic paths
  };
}

export async function getStaticProps({ params }) {
  const projects = {
    "1": { id: "1", title: "Project A", description: "Details of Project A" },
    "2": { id: "2", title: "Project B", description: "Details of Project B" },
  };

  return {
    props: {
      project: projects[params.id] || null,
    },
  };
}
