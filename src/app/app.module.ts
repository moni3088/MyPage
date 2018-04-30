import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { routes } from './app-routing.module';

import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import {MatListModule} from '@angular/material/list';
import { InlineSVGModule } from 'ng-inline-svg';
import { AccessoriesComponent } from './accessories/accessories.component';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    AccessoriesComponent
  ],
  imports: [
    BrowserModule,
    InlineSVGModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatTabsModule,
    MatListModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
