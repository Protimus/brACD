import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicService } from 'app/modules/public/services/public.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss','./../public.component.scss']
})
export class RegisterUserComponent implements OnInit {

  constructor(private _router: Router, private _publicService: PublicService) { 
    this._publicService.add({show:false})
  }

  ngOnInit() {
  }

  backToLogin(event){
    event.preventDefault();
    this._router.navigate(['login'])
  }

}
