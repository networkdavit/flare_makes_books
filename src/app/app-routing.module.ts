import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { CategoryMapsComponent } from './category-maps/category-maps.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'maps',
    component: CategoryMapsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
