import ProjectItem from "../components/ProjectItem"
import styles from "./Projects.module.css"
import iterativeImg from "../assets/project_thumbnails/iterative.png"
import albumImg from "../assets/project_thumbnails/album.png"
import redesignImg from "../assets/project_thumbnails/redesign.png"

const Projects = () => {
  const project_data = [
    {
      id: 0,
      title: "Responsive Redesign",
      img: iterativeImg,
      description: "Description of responsive redesign"
    },
    {
      id: 1,
      title: "React development",
      img: albumImg,
      description: "Description of react development"
    },
    {
      id: 2,
      title: "Iterative design",
      img: redesignImg,
      description: "Description of iterative design"
    }
  ]

  return (
    <div className={`page ${styles.projects}`}>
      {project_data.map((project) => 
        <ProjectItem
          key={project.id}
          title={project.title}
          thumbnail={project.img}
          descr={project.description}
         />
      )}
    </div>
  )
}

export default Projects