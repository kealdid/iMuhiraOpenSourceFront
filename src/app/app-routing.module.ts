import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { ExploreProjectsComponent } from './components/explore-projects/explore-projects.component';
import { MoreInformationComponent } from './components/more-information/more-information.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'joinUs',
    component: JoinUsComponent
  },
  {
    path: 'exploreProjects',
    component: ExploreProjectsComponent
  },
  {
    path: 'moreInformation',
    component: MoreInformationComponent
  },
  {
    path: '', redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
