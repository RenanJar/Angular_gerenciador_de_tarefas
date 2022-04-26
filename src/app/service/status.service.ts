import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { iTarefas } from '../model/iTarefas';
import { Status } from '../model/Status';

@Injectable({
  providedIn: 'root'
})
export class statusService {

  private serverURL: string = `http://localhost:8080`; //back-end server url

  constructor(private httpClient:HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }


  

  public handleError(error: HttpErrorResponse){
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent){

      //client error

      errorMessage = `Error: ${error.error.message}`
    }else{

      //server error

      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;

    }
    return throwError(errorMessage)
  }


}
