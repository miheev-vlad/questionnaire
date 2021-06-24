import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuccpageComponent } from './succpage/succpage.component';
import { QuestformComponent } from './questform/questform.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'succpage', component: SuccpageComponent },
  { path: 'questform', component: QuestformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
