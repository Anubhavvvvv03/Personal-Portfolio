import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Anubhav</h1>
        <p className={styles.description}>I am a Developer !!</p>
        <a href="https://drive.google.com/file/d/1T0AZ-8lEhwNsrZE7u0PzOGEe3Y9U5gJQ/view?usp=sharing" className={styles.contactBtn }>Check out my Resume</a>
    </div>
    <img  className={styles.heroImg}  src={getImageUrl("hero/heroImage.jpg")} alt="Hero Image" />
    <div className={styles.topBlur}></div>
    <div className={styles.boottomBlur}></div>
  </section>
    
  
}
