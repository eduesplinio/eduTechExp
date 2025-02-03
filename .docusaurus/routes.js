import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ba6'),
    exact: true
  },
  {
    path: '/blog/2024/05/14/ciber/blog/hackers-velho-oeste',
    component: ComponentCreator('/blog/2024/05/14/ciber/blog/hackers-velho-oeste', 'bbe'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'dbb'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3df'),
    exact: true
  },
  {
    path: '/projects',
    component: ComponentCreator('/projects', 'a25'),
    exact: true
  },
  {
    path: '/sobre-mim',
    component: ComponentCreator('/sobre-mim', 'b04'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '451'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c40'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '494'),
            routes: [
              {
                path: '/docs/Explorar/Cursos/ciencia-da-computacao',
                component: ComponentCreator('/docs/Explorar/Cursos/ciencia-da-computacao', 'b8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Explorar/Cursos/garantia-de-qualidade',
                component: ComponentCreator('/docs/Explorar/Cursos/garantia-de-qualidade', '076'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Explorar/Cursos/programacao',
                component: ComponentCreator('/docs/Explorar/Cursos/programacao', '66b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Explorar/Cursos/redacao-tecnica',
                component: ComponentCreator('/docs/Explorar/Cursos/redacao-tecnica', 'e9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Explorar/Projetos/web',
                component: ComponentCreator('/docs/Explorar/Projetos/web', '78c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Explorar/tecnologias',
                component: ComponentCreator('/docs/Explorar/tecnologias', 'fe9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introducao',
                component: ComponentCreator('/docs/introducao', '96f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b26'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
