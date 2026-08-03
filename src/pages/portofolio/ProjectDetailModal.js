import React, { useEffect } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  // ESC Key press handler to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling behind modal when opened
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className={styles.modalBackdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
      >
        {/* Header Banner */}
        <div
          className={styles.modalHeader}
          style={{ background: project.gradient }}
        >
          <div className={styles.bannerOverlay} />
          <button
            type="button"
            className={styles.modalCloseBtn}
            onClick={onClose}
            aria-label="Tutup Detail"
          >
            ✕
          </button>

          <div className={styles.modalBadgeRow}>
            <span className={styles.categoryTag}>{project.category}</span>
          </div>

          <h2 id="modal-title" className={styles.modalHeaderTitle}>
            {project.title}
          </h2>
        </div>

        {/* Modal Content Body */}
        <div className={styles.modalBody}>
          {/* Overview */}
          <div>
            <h3 className={styles.modalSectionTitle}>📌 Ringkasan Proyek</h3>
            <p className={styles.modalText}>
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className={styles.modalSectionTitle}>Fitur Utama</h3>
              <ul className={styles.featureList}>
                {project.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.featureCheck}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className={styles.modalSectionTitle}>Teknologi & Tools</h3>
            <div className={styles.techList}>
              {project.tech.map((t) => (
                <span key={t} className={styles.techItem}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className={styles.modalFooter}>
          {project.demoUrl && project.demoUrl !== '#' ? (
            <Link
              to={project.demoUrl}
              className={`${styles.actionBtn} ${styles.primaryAction}`}
            >
              <span>Buka Demo / Link</span>
              <span>→</span>
            </Link>
          ) : (
            <span
              className={`${styles.actionBtn} ${styles.primaryAction}`}
              style={{ opacity: 0.6, cursor: 'not-allowed' }}
            >
              <span>Link demo tidak tersedia</span>
            </span>
          )}

          {project.githubUrl && project.githubUrl !== '#' && (
            <Link
              to={project.githubUrl}
              className={`${styles.actionBtn} ${styles.secondaryAction}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Repository GitHub</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
