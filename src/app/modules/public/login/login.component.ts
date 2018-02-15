import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PublicService } from 'app/modules/public/services/public.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private _router: Router, private publicService: PublicService) { 
      this.publicService.add({show: true})
  }

  ngOnInit() {  }

}
