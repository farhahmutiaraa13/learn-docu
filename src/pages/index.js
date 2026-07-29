import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.backgroundDecorations}>
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Eksplorasi Docusaurus
        </div>

        <h1 className={styles.title}>
          Internship Report <br />
          <span className={styles.titleGradient}>Berbasis Docusaurus</span>
        </h1>

        <p className={styles.subtitle}>
          Code. Design. Learn. Repeat.
        </p>

        <div className={styles.buttons}>
          <Link className={`${styles.btn} ${styles.primaryButton}`} to="/blog">
            <span>Lihat Report</span>
            <span className={styles.icon}>→</span>
          </Link>
          <Link className={`${styles.btn} ${styles.secondaryButton}`} to="/docs/single-page">
            <span>What I Learned</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <Hero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}