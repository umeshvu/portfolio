import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CodeComponent } from './code/code.component';
import { LensComponent } from './lens/lens.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomeComponent },
  { path: 'lens', component: LensComponent},
  { path: 'code', component: CodeComponent}
];
