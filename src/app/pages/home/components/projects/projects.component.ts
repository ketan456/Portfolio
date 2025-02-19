import { Component, inject } from '@angular/core';
import { Project } from 'src/app/models/project.interface';
import { ProjectComponent } from '../project/project.component';
import { TitleComponent } from '@shared/components/title/title.component';
import { MainService } from '@shared/services/main.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, TitleComponent],
  template: `
    <section id="projects">
      <app-title>Projects</app-title>
      <ul class="mt-10 flex flex-col gap-3">
        @for (project of projects; track $index) {
          <li>
            <app-project [project]="project" />
          </li>
        }
      </ul>
    </section>
  `,
})
export class ProjectsComponent {
  private mainService = inject(MainService);
  projects: Project[] = [
    {
      name: 'Visitor Management System',
      description: `Architected a Visitor Management System for 13 Maharashtra State Forensic Labs, automating
gatepass issuance and tracking, reducing manual effort by 50%.
Integrated Role-Based Access Control (RBAC) for enhanced security and streamlined administrative
operations.
Developed a Progressive Web App (PWA), improving mobile compatibility and increasing user adoption
by 40%.
Integrated IDAM-based Single Sign-On (SSO) authentication, ensuring secure and seamless access
for government personnel across the system.
Designed and built a robust Spring Boot backend, developing RESTful APIs to handle visitor
registration, authentication, and role-based access management, ensuring secure and efficient data
handling.`,

      tags: ['Angular', 'Html', 'Css', 'Typescript', 'Java', 'SpringBoot'],
    },
    {
      name: 'Root32 Ecommerce + Admin Panel',
      description: `Designed a single application to support multi-user login functionality for three distinct user types in the
admin panel, ensuring secure and tailored user access.
Developed a responsive dashboard in the admin panel to provide stakeholders with data-driven insights.
Implemented a responsive e-commerce layout for dental products, delivering an engaging and
user-friendly shopping experience.
Integrated a seamless login system for end-users, enhancing accessibility and usability across devices.
Designed a secure user registration API, enabling new users to sign up with validated credentials while
ensuring data integrity and security.
Developed profile and address management functionality, allowing users to update their personal
details and manage multiple addresses efficiently.`,

      tags: ['Angular', 'Html', 'Css', 'Typescript', 'Java', 'SpringBoot'],
    },
    {
      name: 'Solar Easy',
      description: `Solar easy is a platform for all the solar buyer and solar vendor to connect and increase their business with the help of this platform.
  Form Validations - Com﻿plex Reactive Forms using FormBuilder, FormGroup, FromArrays.
Backend API Implementation using HTTP Client.
Custome and reusable css. 
RBAC(Role Based Access Control) - Handle UI/UX According to role.
Apex Charts for dashboard summery.
Create screen using figma designs.
AWS Deployment of frontend project.
`,
      tags: ['Angular', 'Html', 'Css', 'Typescript'],
    },
    {
      name: 'LieferShop',
      description: `LieferShop is a E-commerce grocery web application & mobile application. 
My Contribution - 
Complete Admin Panel and User Web using reactive forms in 2 languages (English & Dutch).
Backend API Implementation using HTTP Client.
Responsive UI - Bootstrap Css.
Screen using figma designs.
Firebase project setup and deployment of LeiferShop Admin, LeiferShop Shop Owner and LeiferShop User Web.
`,
      tags: ['Angular', 'Html', 'Css', 'Typescript'],
    },

    {
      name: 'MedvisePro',
      description: `Revamped the UI with Angular Material themes, boosting user satisfaction scores by 30% and enhancing
application aesthetics.
Implemented ApexCharts for data visualization, enabling actionable insights through bar, pie, and donut
charts.
Built complex, scalable forms using Reactive Forms, ensuring robust and user-friendly interactions.
Tracked project progress and managed tasks via Jira, ensuring smooth collaboration, issue resolution, and
timely delivery of features`,
      tags: ['Angular', 'Html', 'Css', 'Typescript'],
    },
  ];
}
