import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/eduTechExp/blog',
    component: ComponentCreator('/eduTechExp/blog', 'e76'),
    exact: true
  },
  {
    path: '/eduTechExp/blog/2024/01/03/ciber/blog/hacker-old-east',
    component: ComponentCreator('/eduTechExp/blog/2024/01/03/ciber/blog/hacker-old-east', '26f'),
    exact: true
  },
  {
    path: '/eduTechExp/blog/archive',
    component: ComponentCreator('/eduTechExp/blog/archive', '4ef'),
    exact: true
  },
  {
    path: '/eduTechExp/blog/tags',
    component: ComponentCreator('/eduTechExp/blog/tags', '010'),
    exact: true
  },
  {
    path: '/eduTechExp/blog/tags/ciberseguranca',
    component: ComponentCreator('/eduTechExp/blog/tags/ciberseguranca', '475'),
    exact: true
  },
  {
    path: '/eduTechExp/markdown-page',
    component: ComponentCreator('/eduTechExp/markdown-page', '15f'),
    exact: true
  },
  {
    path: '/eduTechExp/projects',
    component: ComponentCreator('/eduTechExp/projects', 'cfb'),
    exact: true
  },
  {
    path: '/eduTechExp/sobre-mim',
    component: ComponentCreator('/eduTechExp/sobre-mim', '7cb'),
    exact: true
  },
  {
    path: '/eduTechExp/docs',
    component: ComponentCreator('/eduTechExp/docs', '635'),
    routes: [
      {
        path: '/eduTechExp/docs',
        component: ComponentCreator('/eduTechExp/docs', '48b'),
        routes: [
          {
            path: '/eduTechExp/docs',
            component: ComponentCreator('/eduTechExp/docs', '431'),
            routes: [
              {
                path: '/eduTechExp/docs/docs',
                component: ComponentCreator('/eduTechExp/docs/docs', 'b35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eduTechExp/docs/Explorar/Cursos/ciberseguranca',
                component: ComponentCreator('/eduTechExp/docs/Explorar/Cursos/ciberseguranca', '480'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
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
                path: '/eduTechExp/docs/Explorar/Cursos/redacao-tecnica',
                component: ComponentCreator('/eduTechExp/docs/Explorar/Cursos/redacao-tecnica', '4cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eduTechExp/docs/Explorar/Desafios/hacking-with-swift',
                component: ComponentCreator('/eduTechExp/docs/Explorar/Desafios/hacking-with-swift', 'c0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eduTechExp/docs/Explorar/Desafios/teste',
                component: ComponentCreator('/eduTechExp/docs/Explorar/Desafios/teste', '42f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eduTechExp/docs/Explorar/Projetos/mobile',
                component: ComponentCreator('/eduTechExp/docs/Explorar/Projetos/mobile', 'bee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eduTechExp/docs/Explorar/Projetos/web',
                component: ComponentCreator('/eduTechExp/docs/Explorar/Projetos/web', '782'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eduTechExp/docs/Explorar/tecnologias',
                component: ComponentCreator('/eduTechExp/docs/Explorar/tecnologias', 'd9a'),
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
    component: ComponentCreator('/eduTechExp/', '0c4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
