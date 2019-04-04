import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { publicAuthGuardService } from './booking-details/private/auth/public-auth-guard.service';

const routes: Routes = [


  { path:'', component: RegisterPageComponent,canActivate:[publicAuthGuardService] },
  { path:'signin' , component: LoginPageComponent,canActivate:[publicAuthGuardService]}
  // {path:'**',component: RegisterPageComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
