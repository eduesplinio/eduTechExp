import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '7d3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '7ec'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '654'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '627'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '706'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'fa6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'acf'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '2d6'),
    exact: true
  },
  {
    path: '/blog/2024/01/03/ciber/blog/hacker-old-east',
    component: ComponentCreator('/blog/2024/01/03/ciber/blog/hacker-old-east', '41b'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '039'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '6e6'),
    exact: true
  },
  {
    path: '/blog/tags/ciberseguranca',
    component: ComponentCreator('/blog/tags/ciberseguranca', 'cc9'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'e37'),
    exact: true
  },
  {
    path: '/projects',
    component: ComponentCreator('/projects', 'c89'),
    exact: true
  },
  {
    path: '/sobre-mim',
    component: ComponentCreator('/sobre-mim', '04d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e53'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '3d2'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '32c'),
            routes: [
              {
                path: '/docs/explorar/cursos/ciberseguranca',
                component: ComponentCreator('/docs/explorar/cursos/ciberseguranca', '11b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/explorar/cursos/ciencia-da-computacao',
                component: ComponentCreator('/docs/explorar/cursos/ciencia-da-computacao', '886'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/explorar/cursos/programacao',
                component: ComponentCreator('/docs/explorar/cursos/programacao', 'e7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/explorar/cursos/redacao-tecnica',
                component: ComponentCreator('/docs/explorar/cursos/redacao-tecnica', 'c59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/explorar/desafios/teste',
                component: ComponentCreator('/docs/explorar/desafios/teste', 'ed2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/explorar/projetos/web',
                component: ComponentCreator('/docs/explorar/projetos/web', '4d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/explorar/tecnologias',
                component: ComponentCreator('/docs/explorar/tecnologias', 'f33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introducao',
                component: ComponentCreator('/docs/introducao', '508'),
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
    component: ComponentCreator('/', '363'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
