import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { useColorMode } from '@docusaurus/theme-common';

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
  }
];

function ProjectCard({ project }) {
  const { colorMode } = useColorMode();
  const currentImage = colorMode === 'dark' ? project.imageDark : project.imageLight;
  return (
    <div 
      className="card" 
      style={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        border: '1px solid var(--ifm-color-emphasis-200)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--ifm-global-shadow-lw)';
      }}
    >
      {currentImage && (
        <div 
          style={{ 
            width: '100%',
            height: '300px',
            overflow: 'hidden',
            backgroundColor: 'var(--ifm-color-emphasis-100)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img 
            src={currentImage} 
            alt={project.title}
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              padding: '0.5rem'
            }}
          />
        </div>
      )}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1.25rem' }}>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', fontSize: '1.15rem', fontWeight: '600', lineHeight: '1.3' }}>
          {project.title}
        </h3>
        <p style={{ marginBottom: '0.75rem', color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.5', fontSize: '0.9rem' }}>
          {project.description}
        </p>
        <div style={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tech.map((tech, idx) => (
            <span 
              key={idx}
              style={{
                fontSize: '0.65rem',
                padding: '0.2rem 0.5rem',
                backgroundColor: 'var(--ifm-color-emphasis-100)',
                color: 'var(--ifm-color-emphasis-800)',
                border: '1px solid var(--ifm-color-emphasis-200)',
                borderRadius: '4px',
                fontWeight: '400',
                letterSpacing: '0.01em'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem' }}>
          <Link 
            to={project.demo} 
            target="_blank"
            className="button button--primary"
            style={{ flex: 1, textAlign: 'center' }}
          >
            Ver Projeto
          </Link>
          <Link 
            to={project.github} 
            target="_blank"
            className="button button--outline button--primary"
            style={{ flex: 1, textAlign: 'center' }}
          >
            Código
          </Link>
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
                
                <div className="row">
                    {projects.map((project, index) => (
                        <div key={index} className="col col--6" style={{ marginBottom: '1.5rem' }}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
