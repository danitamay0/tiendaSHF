
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {path: 'home', component: HomeComponent },
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }