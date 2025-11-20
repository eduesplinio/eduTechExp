import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/eduTechExp/__docusaurus/debug',
    component: ComponentCreator('/eduTechExp/__docusaurus/debug', '3f5'),
    exact: true
  },
  {
    path: '/eduTechExp/__docusaurus/debug/config',
    component: ComponentCreator('/eduTechExp/__docusaurus/debug/config', '74d'),
    exact: true
  },
  {
    path: '/eduTechExp/__docusaurus/debug/content',
    component: ComponentCreator('/eduTechExp/__docusaurus/debug/content', '512'),
    exact: true
  },
  {
    path: '/eduTechExp/__docusaurus/debug/globalData',
    component: ComponentCreator('/eduTechExp/__docusaurus/debug/globalData', 'cad'),
    exact: true
  },
  {
    path: '/eduTechExp/__docusaurus/debug/metadata',
    component: ComponentCreator('/eduTechExp/__docusaurus/debug/metadata', '913'),
    exact: true
  },
  {
    path: '/eduTechExp/__docusaurus/debug/registry',
    component: ComponentCreator('/eduTechExp/__docusaurus/debug/registry', '0c4'),
    exact: true
  },
  {
    path: '/eduTechExp/__docusaurus/debug/routes',
    component: ComponentCreator('/eduTechExp/__docusaurus/debug/routes', 'a9a'),
    exact: true
  },
  {
    path: '/eduTechExp/blog',
    component: ComponentCreator('/eduTechExp/blog', 'e07'),
    exact: true
  },
  {
    path: '/eduTechExp/blog/2024/05/14/ciber/blog/hackers-velho-oeste',
    component: ComponentCreator('/eduTechExp/blog/2024/05/14/ciber/blog/hackers-velho-oeste', '8bd'),
    exact: true
  },
  {
    path: '/eduTechExp/blog/archive',
    component: ComponentCreator('/eduTechExp/blog/archive', 'f4e'),
    exact: true
  },
  {
    path: '/eduTechExp/markdown-page',
    component: ComponentCreator('/eduTechExp/markdown-page', '2db'),
    exact: true
  },
  {
    path: '/eduTechExp/projetos',
    component: ComponentCreator('/eduTechExp/projetos', 'b88'),
    exact: true
  },
  {
    path: '/eduTechExp/sobre-mim',
    component: ComponentCreator('/eduTechExp/sobre-mim', '79c'),
    exact: true
  },
  {
    path: '/eduTechExp/docs',
    component: ComponentCreator('/eduTechExp/docs', '0f8'),
    routes: [
      {
        path: '/eduTechExp/docs',
        component: ComponentCreator('/eduTechExp/docs', 'c7b'),
        routes: [
          {
            path: '/eduTechExp/docs',
            component: ComponentCreator('/eduTechExp/docs', '3c8'),
            routes: [
              {
                path: '/eduTechExp/docs/Explorar/Cursos/ciencia-da-computacao',
                component: ComponentCreator('/eduTechExp/docs/Explorar/Cursos/ciencia-da-computacao', 'fd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eduTechExp/docs/Explorar/Cursos/programacao',
                component: ComponentCreator('/eduTechExp/docs/Explorar/Cursos/programacao', '1db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eduTechExp/docs/Explorar/Cursos/qa-testing',
                component: ComponentCreator('/eduTechExp/docs/Explorar/Cursos/qa-testing', '904'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eduTechExp/docs/Explorar/Cursos/redacao-tecnica',
                component: ComponentCreator('/eduTechExp/docs/Explorar/Cursos/redacao-tecnica', '4cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eduTechExp/docs/Explorar/tecnologias',
                component: ComponentCreator('/eduTechExp/docs/Explorar/tecnologias', 'd9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eduTechExp/docs/introducao',
                component: ComponentCreator('/eduTechExp/docs/introducao', '8e1'),
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
    path: '/eduTechExp/',
    component: ComponentCreator('/eduTechExp/', '1e3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
