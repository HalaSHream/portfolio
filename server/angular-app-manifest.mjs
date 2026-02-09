
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/home"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/portfolio/home",
    "route": "/portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1449, hash: '6eb0a909511b0418c8a75eb7f0c730b7b6239fa252d3c4d187b89a9377a3ff86', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1068, hash: 'b76e79bf6ddb5a14124ffac552782c708c637d0fac168bb1aa6ddad8144359d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 21313, hash: '95dbd13cb6e60dd36993b79d7bc4e3366d8f5f2c011fa93992c1d0cede48b642', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 17121, hash: 'b74e7ab1376b6bca95412c50a9b05454a9d0fa523142af8c96e0a82bac719f02', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 21304, hash: '20b842cec3ae5b7bd50f59a30f318f91a85c0997f51c6b489a915fc0d01e95d2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20852, hash: '4c0ee45f2855e8fefe754c7f4c3520078e253ed066aa482d8db862a294d77dbc', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 15630, hash: 'c6c31f1136b4831dd3f1bb924406c75a4c7f0c165c10d645408a8667d1b4f998', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 19808, hash: '4f2f886085849bcb3b0dd953a63b4adf996c1bfe0357ac4f9268da29d704d63e', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 21055, hash: 'c1fb39e8231fc16db3816c3e82ad3719bb163612acc377f88ba2f5d06eb86775', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'styles-PACPSDQS.css': {size: 880, hash: 'Xf5eToMcDa4', text: () => import('./assets-chunks/styles-PACPSDQS_css.mjs').then(m => m.default)}
  },
};
