import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../../config/config';
import { finalize } from 'rxjs';
import { ModalDataServiceService } from '../ModalDataService/modal-data-service.service';
import { School } from '../../models/school';
// import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolServiceService {
  baseUrl = API_CONFIG.baseUrl


  constructor(private http: HttpClient, private modalDataService: ModalDataServiceService) { }

  // save(): Observable<any> {
  //   console.log('clicou')
  //   const data = this.modalDataService.getData();
  //   console.log(data)
  //   return this.http.post<any>(`${this.baseUrl}/receber-opcao`, data, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   }).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  start(): void {
    const dataSchool: School = this.modalDataService.getData();
    console.log(dataSchool);
    this.http.post(`${this.baseUrl}/start-search`, dataSchool).pipe(
      //Colocar dentro das {} a lógica da animação de carregamento e do botão de download
      finalize(() => { })
    ).subscribe(
      Response => {
        console.log('Backend response: ', Response);
      },
      Error => {
        console.log('Error: ', Error)
      }
    )
  }

  // private handleError(errorResponse: HttpErrorResponse) {
  //   if (errorResponse.error instanceof ErrorEvent) {
  //     console.error('Client Side Error: ', errorResponse.error.message);

  //   }
  //   else {
  //     console.error('Serve Side Error: ', errorResponse);
  //   }
  //   return throwError(() => 'There is a problem with the service. We are notified & working on it. Please try again later.')
  // }
  // getSchoolFile(): Observable<School> {
  //   return this.http.get<School>(`${this.baseUrl}/download-file`, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })

  //   })
  //     .pipe(catchError(this.handleError));
  // }


}



