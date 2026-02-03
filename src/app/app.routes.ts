import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'skills', loadComponent: () => import('./pages/skills/skills.component').then(m => m.SkillsComponent) },
  { path: 'experience', loadComponent: () => import('./pages/experience/experience.component').then(m => m.ExperienceComponent) },
  { path: 'education', loadComponent: () => import('./pages/education/education.component').then(m => m.EducationComponent) },
  { path: 'resume', loadComponent: () => import('./pages/resume/resume.component').then(m => m.ResumeComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' },
];
