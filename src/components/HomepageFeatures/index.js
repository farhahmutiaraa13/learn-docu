import React from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    icon: <span className={styles.icon}>⚙️</span>,
    title: 'Konfigurasi Inti',
    file: 'docusaurus.config.js',
    description:
      'Mempelajari cara mengatur metadata situs, navigasi utama (navbar & footer), dan integrasi plugin bawaan Docusaurus.',
  },
  {
    icon: <span className={styles.icon}>📄</span>,
    title: 'Sistem Routing & Docs',
    file: 'sidebars.js & /docs',
    description:
      'Mengeksplorasi pembuatan hierarki dokumen yang rapi, penomoran otomatis, dan pengelolaan sidebar navigasi kiri.',
  },
  {
    icon: <span className={styles.icon}>💻</span>,
    title: 'Kekuatan MDX',
    file: '.mdx files',
    description:
      'Menyelami kemampuan menulis Markdown yang digabungkan dengan komponen React (JSX) untuk membuat dokumentasi interaktif.',
  },
  {
    icon: <span className={styles.icon}>🧩</span>,
    title: 'Kustomisasi Tema',
    file: 'custom.css & Swizzle',
    description:
      'Mengubah palet warna default, menyesuaikan Dark/Light mode, dan memodifikasi komponen bawaan React menggunakan fitur Swizzle.',
  },
];

function Feature({icon, title, file, description}) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>{icon}</div>
      <div className={styles.fileLabel}>{file}</div>
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Apa yang saya pelajari?</h2>
        </div>
        <div className={styles.grid}>
          {FeatureList.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}