import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() onChangeUrl = new EventEmitter<string>();

  constructor(private _router: Router) { }

  ngOnInit() {
    console.log(this._router.url.split("/")[1]);
    this.onChangeUrl.emit(this._router.url.split("/")[1])
  }

}
