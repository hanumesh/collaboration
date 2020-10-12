import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutomateIdeaComponent } from './automate-idea/automate-idea.component';
import { TrendsComponent } from './trends/trends.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';

const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo: ""},
  //{path: "home", component: HomeCoautomateIdeamponent},
  {path: "automateIdea", component: AutomateIdeaComponent},
  {path: "trends", component: TrendsComponent},
  {path: "my-tasks", component: MyTasksComponent}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
