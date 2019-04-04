import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Routes , RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
//import { constants } from 'os';
import { RegisterformService } from './services/registerform.service';
import { BookingDetailsModule } from './booking-details/booking-details.module';
import { publicAuthGuardService } from './booking-details/private/auth/public-auth-guard.service';
//import { NavbarProfileComponent } from './private/navbar-profile/navbar-profile.component';
//import { ProfilePageComponent } from './private/profile-page/profile-page.component';
//import { DropDownDirective } from './private/directives/drop-down.directive';
//import { MyBookingsComponent } from './private/my-bookings/my-bookings.component';
//import { AuthGuardService } from './private/auth/auth-guard.service';
//import { FaqSComponent } from './private/faq-s/faq-s.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BookingDetailsModule
  ],
  providers: [RegisterformService,publicAuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
