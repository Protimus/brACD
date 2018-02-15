import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes} from '@angular/router';

import { PublicComponent } from './public.component';
import {LoginComponent} from './login/login.component'
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component'
import {RegisterUserComponent} from './register-user/register-user.component'
import { RouterModule } from '@angular/router';
import { routing } from './public.routes';
import {TypewriterDirective} from './../../directives/typewriter.directive'
import { CommonModule } from '@angular/common';
import {PublicService} from './services/public.service'


@NgModule({
  declarations: [
    PublicComponent, LoginComponent,ForgotPasswordComponent,RegisterUserComponent, TypewriterDirective
  ],
  imports: [CommonModule,routing],
  providers: [PublicService],
  bootstrap: [PublicComponent]
})
export class PublicModule { }
