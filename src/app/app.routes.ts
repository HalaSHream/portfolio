// src/app/app.routes.ts
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Skills} from './components/skills/skills';
import { Home} from './components/home/home';
import {Experience} from'./components/experience/experience';


export const routes = [
  {path: "", component: Home},
  { path:'home',component:Home},
  { path: 'about', component: About },
  { path: 'experience',component:Experience},
  { path: 'projects', component: Projects },
  { path: 'skills', component: Skills },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: 'home' } 
];
