import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss','./../public.component.scss']
})
export class RegisterUserComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  backToLogin(event){
    event.preventDefault();
    this._router.navigate(['login'])
  }

}
