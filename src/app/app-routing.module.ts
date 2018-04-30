
import {Route} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EducationComponent} from './education/education.component';
import {ExperienceComponent} from './experience/experience.component';
import {ProjectsComponent} from './projects/projects.component';

export const routes: Route[] = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'education', component: EducationComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'projects', component: ProjectsComponent}
];
