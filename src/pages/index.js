import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  // Adicionando a função para desabilitar o menu de contexto do botão direito
  const disableRightClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.videoContainer} onContextMenu={disableRightClick}>
      <video autoPlay loop muted controls={false} className={styles.backgroundVideo} style={{ pointerEvents: "none" }}>
        <source src="img/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title='Principal'
      description="Desvendando o complexo para impulsionar a inovação digital.">
      <HomepageHeader />
    </Layout>
  );
}
