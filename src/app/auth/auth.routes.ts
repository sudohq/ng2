import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { RemindPasswordComponent } from './auth/remind-password/remind-password.component';
import { AuthComponent } from './auth/auth.component';

export const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'remind-password', component: RemindPasswordComponent },
      { path: 'registration', component: RegistrationComponent },
    ]
  }
];
