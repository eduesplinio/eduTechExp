import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './projetos.module.css';

const projects = [
  {
    title: 'Linio - Assistente Financeiro Baseado em IA',
    description: 'Assistente inteligente que ajuda a gerenciar finanças pessoais. Analisa gastos, oferece insights e responde perguntas sobre suas transações.',
    tech: ['Next.js', 'MongoDB Atlas', 'Vector Search', 'RAG', 'OpenAI'],
    demo: 'https://financial-ai-agent-web.vercel.app',
    github: 'https://github.com/eduesplinio/financial-ai-agent',
    imageLight: '/eduTechExp/img/linio-financial-light.png',
    imageDark: '/eduTechExp/img/linio-financial.png'
  },
  {
    title: 'Base de Conhecimento com IA',
    description: 'Sistema inteligente para organizar e buscar informações usando IA. Permite criar, gerenciar e encontrar conteúdo de forma rápida e eficiente.',
    tech: ['Next.js', 'NestJS', 'MongoDB', 'OpenAI', 'TypeScript'],
    demo: 'https://knowledge-base-ai-eosin.vercel.app',
    github: 'https://github.com/eduesplinio/knowledge-base-ai',
    imageLight: '/eduTechExp/img/knowledge-base-light.png',
    imageDark: '/eduTechExp/img/knowledge-base.png'
  },
  {
    title: 'ESPLIN - Jogo de Palavras Tech',
    description: 'Jogo de palavras inspirado no Wordle focado em termos de tecnologia. Permite testar conhecimentos tech através de palavras de 5 letras.',
    tech: ['Vue.js', 'Express.js', 'MongoDB Atlas', 'Pinia', 'Vite', 'Vitest'],
    demo: 'https://esplin.vercel.app',
    github: 'https://github.com/eduesplinio/esplin',
    imageLight: '/eduTechExp/img/esplin-light.png',
    imageDark: '/eduTechExp/img/esplin.png'
  }
];

function ProjectCard({ project, index }) {
  const { colorMode } = useColorMode();
  const currentImage = colorMode === 'dark' ? project.imageDark : project.imageLight;
  const isReversed = index % 2 === 1;
  const isVideo = currentImage && currentImage.endsWith('.mp4');
  
  return (
    <div 
      className={`card ${styles.projectCard}`}
      style={{ 
        marginBottom: '2rem',
        border: '1px solid var(--ifm-color-emphasis-200)',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--ifm-global-shadow-lw)';
      }}
    >
      <div className="row" style={{ margin: 0, flexDirection: isReversed ? 'row-reverse' : 'row' }}>
        <div className={`col col--5 ${styles.projectImageCol}`} style={{ padding: 0 }}>
          {currentImage && (
            <div 
              className={styles.projectImage}
              style={{ 
                width: '100%',
                height: '280px',
                overflow: 'hidden',
                backgroundColor: 'var(--ifm-color-emphasis-100)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {isVideo ? (
                <video 
                  src={currentImage} 
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: '1rem'
                  }}
                />
              ) : (
                <img 
                  src={currentImage} 
                  alt={project.title}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: '1rem'
                  }}
                />
              )}
            </div>
          )}
        </div>
        <div className={`col col--7 ${styles.projectContentCol}`} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 className={styles.projectTitle} style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.4rem', fontWeight: '600' }}>
            {project.title}
          </h3>
          <p style={{ marginBottom: '1rem', color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.6', fontSize: '1rem' }}>
            {project.description}
          </p>
          <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tech.map((tech, idx) => (
              <span 
                key={idx}
                style={{
                  fontSize: '0.75rem',
                  padding: '0.3rem 0.6rem',
                  backgroundColor: 'var(--ifm-color-emphasis-100)',
                  color: 'var(--ifm-color-emphasis-800)',
                  border: '1px solid var(--ifm-color-emphasis-200)',
                  borderRadius: '4px',
                  fontWeight: '500'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className={styles.projectButtons} style={{ display: 'flex', gap: '1rem' }}>
            <Link 
              to={project.demo} 
              target="_blank"
              className="button button--primary"
              style={{ minWidth: '120px' }}
            >
              Ver Projeto
            </Link>
            <Link 
              to={project.github} 
              target="_blank"
              className="button button--outline button--primary"
              style={{ minWidth: '120px' }}
            >
              Código
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
    return (
        <Layout
            title="Projetos"
            description="Projetos desenvolvidos com Next.js, IA e MongoDB.">
            <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <div className="text--center" style={{ marginBottom: '2rem' }}>
                    <h1 style={{ marginBottom: '0.5rem' }}>Projetos</h1>
                    <p className="hero__subtitle">
                        Soluções completas desenvolvidas com tecnologias modernas
                    </p>
                </div>
                
                <div>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}
