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
      img: redesignImg,
      description: "Description of responsive redesign",
      link: "site-redesign"
    },
    {
      id: 1,
      title: "React development",
      img: albumImg,
      description: "Description of react development",
      link: "album-app"
    },
    {
      id: 2,
      title: "Iterative design",
      img: iterativeImg,
      description: "Description of iterative design",
      link: "designing-roomkast"
    },
  ]

  return (
    <div className="page">
      <h1>Projects</h1>
      <div className={styles.projects}>
      {project_data.map((project) => 
        <ProjectItem
          key={project.id}
          title={project.title}
          thumbnail={project.img}
          descr={project.description}
          link={project.link}
         />
      )}
    </div>
    </div>
    
  )
}

export default Projects