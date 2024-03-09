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
    component: ComponentCreator('/docs', '5d4'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e30'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '817'),
            routes: [
              {
                path: '/docs/category/-mobile',
                component: ComponentCreator('/docs/category/-mobile', '0d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/challenges/hacking-with-swift',
                component: ComponentCreator('/docs/challenges/hacking-with-swift', 'ebf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/challenges/pen-test',
                component: ComponentCreator('/docs/challenges/pen-test', '693'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/courses/cibersecurity',
                component: ComponentCreator('/docs/courses/cibersecurity', 'eee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/courses/programing',
                component: ComponentCreator('/docs/courses/programing', '259'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/courses/techwriting',
                component: ComponentCreator('/docs/courses/techwriting', 'cce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/explore',
                component: ComponentCreator('/docs/explore', '0a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects/mobile/memory-game',
                component: ComponentCreator('/docs/projects/mobile/memory-game', '6ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects/mobile/quiz-game',
                component: ComponentCreator('/docs/projects/mobile/quiz-game', 'd72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects/web/',
                component: ComponentCreator('/docs/projects/web/', 'b6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects/web/esplinHub',
                component: ComponentCreator('/docs/projects/web/esplinHub', 'b03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects/web/tabnews',
                component: ComponentCreator('/docs/projects/web/tabnews', '017'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects/web/test-of-progress',
                component: ComponentCreator('/docs/projects/web/test-of-progress', '026'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tools-and-techs',
                component: ComponentCreator('/docs/tools-and-techs', '2d6'),
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