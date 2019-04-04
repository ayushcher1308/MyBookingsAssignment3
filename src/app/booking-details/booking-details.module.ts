import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarProfileComponent } from './private/navbar-profile/navbar-profile.component';
import { ProfilePageComponent } from './private/profile-page/profile-page.component';
import { DropDownDirective } from './private/directives/drop-down.directive';
import { MyBookingsComponent } from './private/my-bookings/my-bookings.component';
import { FaqSComponent } from './private/faq-s/faq-s.component';
import { BookingRoutingModule } from './booking-routing.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Routes , RouterModule} from '@angular/router';
import { AuthGuardService } from './private/auth/auth-guard.service';
@NgModule({
  declarations: [
    NavbarProfileComponent,
    ProfilePageComponent,
    DropDownDirective,
    MyBookingsComponent,
    FaqSComponent
  ],
  imports: [
    CommonModule,
    
    FormsModule,

  ReactiveFormsModule,
    
    BookingRoutingModule
  ],
  providers:[AuthGuardService],
  exports:[NavbarProfileComponent,ProfilePageComponent,DropDownDirective,MyBookingsComponent,FaqSComponent]
})
export class BookingDetailsModule { }
