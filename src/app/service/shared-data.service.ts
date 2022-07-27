import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
private content = new BehaviorSubject<any>('');
public share = this.content.asObservable();


  constructor() { }

updateData(text){
  this.content.next(text);
}

public dataEmitter = new Subject<string>();

raiseDataEmitterEvent(data: string) {
  this.dataEmitter.next(data);
}


}
