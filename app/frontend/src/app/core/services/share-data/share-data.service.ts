import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor() { }
  sharedData: string = '';

  setSharedData(data: string): void {
   
    this.sharedData = data;
  }

  getSharedData(): string {
    if(this.sharedData == 'true')console.log(this.sharedData)
    return this.sharedData;
  }
}
