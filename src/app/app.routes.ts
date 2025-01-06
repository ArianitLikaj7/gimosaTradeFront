import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {AboutComponent} from "./components/about/about.component";

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Rruga kryesore
  { path: 'about', component: AboutComponent }, // Rrugë tjetër
  { path: '**', redirectTo: '' }, // Redirektim për rrugë të panjohura
];
