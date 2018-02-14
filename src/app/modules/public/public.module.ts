import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes} from '@angular/router'

import { PublicComponent } from './public.component';
import {LoginComponent} from './login/login.component'
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component'
import {RegisterUserComponent} from './register-user/register-user.component'
import { RouterModule } from '@angular/router';
import { routing } from './public.routes';


@NgModule({
  declarations: [
    PublicComponent, LoginComponent,ForgotPasswordComponent,RegisterUserComponent
  ],
  imports: [routing],
  providers: [],
  bootstrap: [PublicComponent]
})
export class PublicModule { }
