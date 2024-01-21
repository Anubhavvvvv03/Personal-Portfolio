import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
       <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.jpg")} alt="About Image" />
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
         
         
         <ul className={styles.aboutItems}>
            <li className={styles.aboutText}>
            <p >I am a highly skilled, motivated and an aspiring Software Engineer with a strong background in Computers. 
                I am pursuing my B.E at RNS Institute of Technology in the branch Information Science and Engineering(ISE).
                 Throughout my academic journey, I have developed a comprehensive understanding of software development principles, which I have further refined through my projects. </p>
            <p >Outside of my professional life, I have a variety of interests. I enjoy playing cricket, watching movies and travelling.
                As an aspiring Software Engineer, I am passionate about creating innovative solutions and pushing the boundaries of technology. I am constantly seeking opportunities to expand my knowledge 
                and stay up-to-date with the latest advancements in the field. With my strong technical skills, collaborative mindset, and dedication to excellence, I am confident in my ability to contribute to the success of any software development team.
            </p>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt='cursor image'></img>
                <div className={styles.aboutItemText}>
                     <h3>Front-end Developer</h3>
                     <p>I am front-end Developer with experience in building responsive and optimized sites</p>
               </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt='server image'></img>
                <div className={styles.aboutItemText}>
                     <h3>Back-end Developer</h3>
                     <p>I have experience in building fast and effective backend systems </p>
               </div>
            </li>
        </ul>
        </div>
    </section>
  )
}



{/* <div className={styles.about-text}>
<p >I am a highly skilled, motivated and an aspiring Software Engineer with a strong background in Computers. 
  I am pursuing my B.E at RNS Institute of Technology in the branch Information Science and Engineering.
  Throughout my academic journey, I have developed a comprehensive understanding of software development principles, which I have further refined through my projects. </p>
<p >Outside of my professional life, I have a variety of interests. I enjoy playing cricket, watching movies and travelling.
As am aspiring Software Engineer, I am passionate about creating innovative solutions and pushing the boundaries of technology. I am constantly seeking opportunities to expand my knowledge 
and stay up-to-date with the latest advancements in the field. With my strong technical skills, collaborative mindset, and dedication to excellence, I am confident in my ability to contribute to the success of any software development team.
</p>
</div>  */}