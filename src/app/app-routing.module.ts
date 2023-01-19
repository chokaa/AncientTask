import { BoxOpenComponent } from './box-open/box-open.component';
import { BoxesListComponent } from './boxes-list/boxes-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'boxes', component: BoxesListComponent },
  { path: 'box-open/:id', component: BoxOpenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
