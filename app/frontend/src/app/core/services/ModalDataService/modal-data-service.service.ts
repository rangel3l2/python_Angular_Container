import { Injectable } from '@angular/core';
import { School } from '../../models/school';

@Injectable({
  providedIn: 'root'
})

export class ModalDataServiceService {
  public data: any;

  setData(data: School): void {
    this.data = data;
  }

  getData(): School {
    return this.data;
  }
}
