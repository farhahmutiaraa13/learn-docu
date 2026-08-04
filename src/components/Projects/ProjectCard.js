import React from 'react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, description, techStack, link, image }) {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.image} />}
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.tags}>
          {techStack.map((tech, idx) => (
            <span key={idx} className={styles.tag}>{tech}</span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>
            Lihat Proyek →
          </a>
        )}
      </div>
    </div>
  );
}