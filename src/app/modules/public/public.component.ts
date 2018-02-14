import {Component, OnInit, OnChanges} from '@angular/core'
import { Router } from '@angular/router';
import { PublicService } from 'app/modules/public/services/public.service';



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
    year: number;

    constructor(private _router: Router, private _publicService: PublicService){
        this._publicService.add$.subscribe(data=>{
            this.showForgotAndRegister = data.show;
        })
    }

    ngOnInit(){
        this.year = new Date().getFullYear();
    }

    ngOnChanges(){
        console.log("CHANGES")
    }

    goToForgot(event){
        event.preventDefault();
        this._router.navigate(['forgot-password'])
        
    }

    goToRegister(event){
        event.preventDefault();
        this._router.navigate(['register'])
    }

    onChangeUrl(string){
        console.log(string)
    }
}