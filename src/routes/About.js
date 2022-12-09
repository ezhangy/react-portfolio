import profileImg from "../assets/profile.jpg"
import styles from "./About.module.css"

const About = () => (
  <div className={styles.about}>
    <div className={styles["profile-wrapper"]}>
      <img src={profileImg}/>
    </div>
    <div className={styles["bio-wrapper"]}>
      <h1>about me.</h1>
      <p>I'm fascinated by systems big and small—how we make sense of their intricacies and inner workings, the manifold ways we can represent them, and by the stories they can tell us.</p>

      <p> I'm a senior studying computer science and biology at Brown. Currently, I get to make cool things as part of <a href="https://www.browndailyherald.com/">Brown Daily Herald's</a> Data Desk. I also teach about ethics in computational biology as part of <a href="http://ethics.cs.brown.edu/">Socially Responsible Computing @ Brown</a></p>. 
    </div>
  </div>
  
)

export default About