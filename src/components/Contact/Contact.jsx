import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
     <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email-icon" />
                <a href="mailto:anubhavonnet01@outlook.com">anubhavonnet01@outlook.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin-icon" />
                <a href="https://www.linkedin.com/in/anubhav-nath-009015213/">linkedin.com/in/anubhav-nath-009015213</a>
            </li>
            <li className={styles.link}> 
                <img src={getImageUrl("contact/githubIcon.png")} alt="github-icon" />
                <a href="https://github.com/Anubhavvvvv03">github.com/Anubhavvvvv03</a>
            </li>
        </ul>
     </footer>
  )
}
