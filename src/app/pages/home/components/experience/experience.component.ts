import { Component, inject } from '@angular/core';
import { Experience } from 'src/app/models/experience.interface';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { TitleComponent } from '@shared/components/title/title.component';
import { MainService } from '@shared/services/main.service';
import { LinkButtonComponent } from '@shared/components/link-button/link-button.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCardComponent, TitleComponent, LinkButtonComponent],
  template: `
    <section id="experience">
      <app-title>Experience</app-title>
      <ul class="mt-10 flex flex-col gap-3">
        @for (experience of experiences; track $index) {
          <li>
            <app-experience-card [experience]="experience" />
          </li>
        }
      </ul>
      <!-- <app-link-button
        href="https://cv.uspiri.com"
        btnStyle="base"
        class="mt-8 flex underline"
        >Read more...</app-link-button
      > -->
    </section>
  `,
})
export class ExperienceComponent {
  private mainService = inject(MainService);
  experiences: Experience[] = [
    {
      company: 'Ameliorate Digital Consultancy Pvt Ltd.',
      location: 'Buenos Aires, Argentina',
      description: `Angular Developer with 3+ years of experience, passionate about building scalable and high-performance web applications.
Experienced in designing and developing dynamic, user-centric applications that enhance business efficiency and customer engagement. Proficient in front-end development, with a strong understanding of Angular and modern web technologies.
Key Skills and Achievements:
`,
      position: 'Angular Developer',
      url: 'http://nenes.io/',
      startDate: '2022',
      endDate: 'Actually',
      remote: true,
      highlights: [
        'Expertise in Angular, TypeScript, and JavaScript for developing responsive web applications.',
        'Proficient in Progressive Web Apps (PWA) and state management using NgRx.',
        'Experienced in integrating RESTful APIs and optimizing performance for seamless user experiences.',
        'Strong problem-solving skills with a track record of delivering high-quality projects on time.',
        'Excellent collaboration and communication skills, working effectively with cross-functional teams.',
      ],
    },
  ];
}
