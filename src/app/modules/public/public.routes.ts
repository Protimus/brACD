
import {Routes, RouterModule, provideRoutes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './login/login.component'
import { RegisterUserComponent } from 'app/modules/public/register-user/register-user.component';
import { ForgotPasswordComponent } from 'app/modules/public/forgot-password/forgot-password.component';
import { PublicComponent } from 'app/modules/public/public.component';


const PUBLIC_ROUTES: Routes = [
    {path: '', component: PublicComponent, children:[
        {path: 'login', component: LoginComponent},
        {path: 'register', component: RegisterUserComponent},
        {path: 'forgot-password', component: ForgotPasswordComponent}
    ]},
    {path: '', redirectTo: 'login'},
    {path: '**', redirectTo: 'login'}
]

export const routing: ModuleWithProviders = RouterModule.forChild(PUBLIC_ROUTES);