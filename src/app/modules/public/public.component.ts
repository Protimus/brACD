import {Component, OnInit} from '@angular/core'


@Component({
    templateUrl: './public.component.html',
    styleUrls: ['./public.component.scss']
    
})
export class PublicComponent implements OnInit{

    codeNames = [
        "Faça traduções para o emulador.", 
        "Reporte erros no emulador.", 
        "Ajude na criação de projetos."
]

    constructor(){}

    ngOnInit(){}
}