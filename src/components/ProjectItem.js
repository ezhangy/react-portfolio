import { useNavigate } from "react-router-dom";
import styles from "./ProjectItem.module.css"

const ProjectItem = ({ title, thumbnail, descr, link}) => {
  const navigate = useNavigate()
  const handleClick = (linkTo) => () => navigate(linkTo)
  
  return (
    <div 
      className={`${styles.item} ${styles['glow-on-hover']}`}
      onClick={handleClick(link)}
    >
      <h2>{title}</h2>
      <p>{descr}</p>
      <div className={styles['img-container']}>
        <img src={thumbnail}/>
      </div>
    </div>
  )
}

export default ProjectItem