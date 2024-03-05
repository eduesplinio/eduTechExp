/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Conhecer',
      items: ['sobre-mim'],
    },
    {
      type: 'category',
      label: 'Explorar',
      items: [
        'category/projetos',
        'category/cursos',
        'category/desafios',
        'category/tecnologias',
      ],
    },
    {
      type: 'category',
      label: 'Mais',
      items: ['blog'],
    },
  ],
};

export default sidebars;