import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PublicService {
  
    public add$: Observable<any>;
    private subject = new Subject<any>();
  
  constructor() {
    this.add$ = this.subject.asObservable();
   }

   add(data){
     this.subject.next(data);
   }

}
