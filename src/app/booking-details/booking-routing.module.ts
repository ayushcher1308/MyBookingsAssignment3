import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { ProfilePageComponent } from './private/profile-page/profile-page.component';
import { AuthGuardService } from './private/auth/auth-guard.service';
import { FaqSComponent } from './private/faq-s/faq-s.component';
import { MyBookingsComponent } from './private/my-bookings/my-bookings.component';

const routes: Routes = [

    
       { path:'profile', component:ProfilePageComponent, canActivate: [AuthGuardService]},
       { path:'mybookings', component:MyBookingsComponent,canActivate: [AuthGuardService]},
       { path:'faq', component:FaqSComponent,canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class BookingRoutingModule { }
