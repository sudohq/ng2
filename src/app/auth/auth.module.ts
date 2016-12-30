import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { RemindPasswordComponent } from './auth/remind-password/remind-password.component';

import { authRoutes } from './auth-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(authRoutes)
  ],
  declarations: [AuthComponent, LoginComponent, RegistrationComponent, RemindPasswordComponent]
})
export class AuthModule {
  construnctor() {
    console.log('auth is ready');
  }
}
