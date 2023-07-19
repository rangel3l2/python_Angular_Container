import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class ShareDataService {
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();
  constructor() { }
  sharedData: string = '';

  setSharedData(data: any): void {

    this.dataSubject.next(data);
  }

 /*  getSharedData(): string {
    if(this.sharedData == 'true')console.log(this.sharedData)
    return this.sharedData;
  } */
}
