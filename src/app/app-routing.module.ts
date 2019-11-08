import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/:id', component: HeroDetailComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
    RouterModule
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
