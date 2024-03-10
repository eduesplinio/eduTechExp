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
    component: ComponentCreator('/docs', 'e32'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'ee9'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f3f'),
            routes: [
              {
                path: '/docs/docs',
                component: ComponentCreator('/docs/docs', '39c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Explorar/Cursos/ciberseguranca',
                component: ComponentCreator('/docs/Explorar/Cursos/ciberseguranca', 'fe2'),
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
                path: '/docs/Explorar/Projetos/mobile',
                component: ComponentCreator('/docs/Explorar/Projetos/mobile', '5db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Explorar/Projetos/web',
                component: ComponentCreator('/docs/Explorar/Projetos/web', '78c'),
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
