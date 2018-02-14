import {Component, OnInit, OnChanges} from '@angular/core'
import { Router } from '@angular/router';



@Component({
    templateUrl: './public.component.html',
    styleUrls: ['./public.component.scss']
    
})
export class PublicComponent implements OnInit, OnChanges{

    texts = [
        "Faça traduções para o emulador.", 
        "Reporte erros no emulador.", 
        "Ajude na criação de projetos."
    ]
    showForgotAndRegister: boolean = true;

    constructor(private _router: Router){}

    ngOnInit(){}

    ngOnChanges(){
        console.log("CHANGES")
    }

    goToForgot(event){
        event.preventDefault();
        this.showForgotAndRegister = false;
        this._router.navigate(['forgot-password'])
        
    }

    goToRegister(event){
        event.preventDefault();
        this.showForgotAndRegister = false;
        this._router.navigate(['register'])
    }

    onChangeUrl(string){
        console.log(string)
    }
}