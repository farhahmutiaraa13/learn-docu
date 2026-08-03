import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import ProjectDetailModal from './ProjectDetailModal';

// Data Project Lengkap
const PROJECTS = [
  {
    id: 'docusaurus-site',
    title: 'Farhah Site & Report Magang',
    description: 'Website dokumentasi magang dan portofolio interaktif berbasis Docusaurus v3 dengan tema kustom Light & Dark Mode.',
    longDescription: 'Proyek ini dirancang sebagai platform terpusat untuk menyimpan laporan magang, dokumentasi teknis, dan portofolio pribadi. Dibangun menggunakan Docusaurus v3 dan React dengan sistem tema yang disesuaikan secara dinamis (Oxford Navy, Prussian Blue, dan Mint Cream).',
    category: 'Web App',
    tech: ['React', 'Docusaurus v3', 'CSS Modules', 'JavaScript', 'MDX'],
    features: [
      'Sistem dokumentasi terstruktur dengan pencarian kilat',
      'Dukungan penuh Light & Dark Mode yang disesuaikan',
      'Halaman Logbook/Blog magang interaktif dengan estimasi baca',
      'Integrasi komponen React langsung dalam file MDX'
    ],
    gradient: 'linear-gradient(135deg, #0b2545 0%, #13315c 100%)',
    icon: '📚',
    status: 'On-Progress',
    demoUrl: 'https://learn-docusaurus-nine.vercel.app/',
    githubUrl: 'https://github.com/farhahmutiaraa13/learn-docu',
    highlight: true,
  },
  {
    id: 'myshop-pos',
    title: 'myShop - Mobile POS App',
    description: 'Aplikasi kasir mobile dan manajemen inventaris untuk UMKM yang terintegrasi dengan arsitektur MVVM dan backend Supabase.',
    longDescription: 'Aplikasi Point of Sale (POS) berbasis mobile android yang dikembangkan untuk memudahkan UMKM mengelola stok barang, mencatat transaksi penjualan real-time, dan menghasilkan laporan pendapatan berkala.',
    category: 'Mobile App',
    tech: ['Kotlin', 'Android Jetpack', 'MVVM', 'Supabase', 'UI/UX Design'],
    features: [
      'Pencatatan transaksi kasir cepat & cetak struk',
      'Manajemen stok & inventaris barang otomatis',
      'Sinkronisasi data real-time dengan Supabase',
      'Visualisasi grafik pendapatan harian dan bulanan'
    ],
    gradient: 'linear-gradient(135deg, #059669 0%, #34d399 100%)',
    icon: '🛒',
    status: 'Selesai',
    demoUrl: '#',
    githubUrl: 'https://github.com/itlovel/MyShop',
    highlight: true,
  },
  {
    id: 'daur-platform',
    title: 'DAUR - Waste Management Platform',
    description: 'Platform web kolaboratif untuk solusi pengelolaan sampah yang mencakup modul autentikasi pengguna dan sistem manajemen artikel edukasi.',
    longDescription: 'DAUR adalah solusi platform ramah lingkungan yang mengedukasi masyarakat mengenai pemilahan sampah dan menghubungkan warga dengan bank sampah terdekat.',
    category: 'Web App',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'REST API', 'Node.js'],
    features: [
      'Peta lokasi bank sampah terdekat',
      'Autentikasi akun warga dan pengelola sampah',
      'Katalog penukaran poin hasil pemilahan sampah',
      'Pusat artikel edukasi lingkungan interaktif'
    ],
    gradient: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
    icon: '♻️',
    status: 'Selesai',
    demoUrl: '#',
    githubUrl: 'https://github.com/ariel-naviandana/daur',
    highlight: false,
  },
  {
    id: 'arifa-olshop',
    title: 'Arifa Olshop Landing Page',
    description: 'Landing page responsif yang dirancang untuk toko online lokal guna memperkuat kehadiran digital serta menampilkan katalog produk secara interaktif.',
    longDescription: 'Landing page promosi produk pakaian dan aksesori wanita lokal dengan antarmuka yang bersih, cepat diakses, dan siap pakai untuk promosi media sosial.',
    category: 'Web App',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
    features: [
      'Katalog produk interaktif dengan filter kategori',
      'Integrasi tombol pemesanan langsung ke WhatsApp',
      'Desain ultra-responsif (Desktop, Tablet, Mobile)',
      'Optimasi kecepatan muat halaman & SEO dasar'
    ],
    gradient: 'linear-gradient(135deg, #874b07 0%, #d8c79a 100%)',
    icon: '🛍️',
    status: 'Selesai',
    demoUrl: '#',
    githubUrl: 'https://github.com/farhahmutiaraa13/ArifaOlshop.git',
    highlight: false,
  },
  {
    id: 'my-journal',
    title: 'myJournal - Web Platform',
    description: 'Website jurnal digital interaktif yang dibangun menggunakan arsitektur Model-View-Controller (MVC) dengan manajemen database relasional.',
    longDescription: 'Aplikasi jurnal pribadi berbasis web yang memungkinkan pengguna mencatat pemikiran, menetapkan target mingguan, dan mengorganisir catatan dengan aman.',
    category: 'Web App',
    tech: ['PHP Native', 'MySQL', 'Arsitektur MVC', 'Bootstrap'],
    features: [
      'Sistem registrasi & login terenkripsi',
      'CRUD (Create, Read, Update, Delete) catatan jurnal',
      'Pengelompokkan catatan berdasarkan tanggal & kategori',
      'Manajemen basis data MySQL berstruktur MVC'
    ],
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #a78ffa 100%)',
    icon: '📖',
    status: 'Selesai',
    demoUrl: '#',
    githubUrl: 'https://github.com/farhahmutiaraa13/MVC_ProjectAkhir.git',
    highlight: false,
  },
  {
    id: 'rek-a-route',
    title: 'Rek a Route - Public Transport Guide',
    description: 'Aplikasi web panduan rute transportasi publik yang dirancang dengan pendekatan UI/UX berpusat pada pengguna untuk navigasi perkotaan yang mudah.',
    longDescription: 'Proyek perancangan UI/UX dan prototipe web untuk membantu masyarakat menemukan rute angkutan umum dan bus kota secara akurat dan efisien.',
    category: 'UI/UX',
    tech: ['Figma', 'UI/UX Design', 'User Research', 'HTML/CSS Prototype'],
    features: [
      'Peta rute dan informasi tarif angkutan kota',
      'Desain antarmuka yang bersih & inklusif',
      'Prototipe interaktif siap uji pengguna',
      'Panduan langkah demi langkah perjalanan'
    ],
    gradient: 'linear-gradient(135deg, #102b95 0%, #8da9c4 100%)',
    icon: '🗺️',
    status: 'Prototipe',
    demoUrl: '#',
    githubUrl: 'https://github.com/farhahmutiaraa13',
    highlight: false,
  }
];

const CATEGORIES = ['Semua', 'Web App', 'Mobile App', 'UI/UX', 'Dokumentasi'];

export default function Portfolio() {
  const { siteConfig } = useDocusaurusContext();
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'Semua') return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <Layout
      title={`Portofolio | ${siteConfig.title}`}
      description="Kumpulan proyek, eksplorasi, dan karya yang telah dikembangkan oleh Farhah."
    >
      <main className={styles.portfolioContainer}>
        <div className={styles.portfolioWrapper}>
          {/* Header Section */}
          <header className={styles.headerSection}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Showcase & Karya
            </div>
            <h1 className={styles.title}>
              Portofolio <span className={styles.titleGradient}>Saya</span>
            </h1>
            <p className={styles.subtitle}>
              Kumpulan proyek web, aplikasi mobile, desain antarmuka, dan dokumentasi teknis yang telah saya kerjakan.
            </p>
          </header>

          {/* Filter Categories */}
          <div className={styles.filterContainer}>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={`${styles.filterBtn} ${
                  selectedCategory === category ? styles.filterBtnActive : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className={styles.projectsGrid}>
              {filteredProjects.map((project) => (
                <article key={project.id} className={styles.projectCard}>
                  {/* Card Visual Banner */}
                  <div
                    className={styles.cardBanner}
                    style={{ background: project.gradient }}
                  >
                    <div className={styles.bannerOverlay} />
                    <span className={styles.categoryTag}>{project.category}</span>
                    <span className={styles.cardIcon}>{project.icon}</span>
                  </div>

                  {/* Card Content */}
                  <div className={styles.cardBody}>
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>

                    {/* Tech List */}
                    <div className={styles.techList}>
                      {project.tech.map((t) => (
                        <span key={t} className={styles.techItem}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className={styles.cardFooter}>
                      <button
                        type="button"
                        className={`${styles.actionBtn} ${styles.primaryAction}`}
                        onClick={() => setSelectedProject(project)}
                      >
                        <span>Lihat Detail</span>
                        <span>→</span>
                      </button>

                      {project.githubUrl && project.githubUrl !== '#' && (
                        <Link
                          to={project.githubUrl}
                          className={`${styles.actionBtn} ${styles.secondaryAction}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>GitHub</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              Tidak ada proyek ditemukan dalam kategori ini.
            </div>
          )}
        </div>
      </main>

      {/* Project Detail Modal Component */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Layout>
  );
}
