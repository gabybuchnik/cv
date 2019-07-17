import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {WorksComponent} from './components/works/works.component';
import {SkillsComponent} from './components/skills/skills.component';

const routes: Routes = [
  {path:'' , component : AboutComponent , pathMatch : 'full'},
  {path:'about' , component : AboutComponent },
  {path:'works' , component : WorksComponent },
  {path:'skills' , component : SkillsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
