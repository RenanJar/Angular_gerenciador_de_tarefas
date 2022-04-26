import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { iTarefas } from '../model/iTarefas';
import { Status } from '../model/Status';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private serverURL: string = `http://localhost:8080`; //back-end server url

  constructor(private httpClient:HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }




  // TAREFAS//



  public getAlltarefas(): Observable<iTarefas[]>{
    return this.httpClient.get<iTarefas[]>('http://localhost:8080/tarefas',this.token).pipe(catchError(this.handleError));
  }

  

  public createtarefa(tarefa:iTarefas): Observable<iTarefas>{
    return this.httpClient.post<iTarefas>('http://localhost:8080/tarefas',tarefa,this.token).pipe(catchError(this.handleError));
  }


  public updatetarefa(tarefa: iTarefas, tarefaId: string): Observable<iTarefas>{
    return this.httpClient.put<iTarefas>(`http://localhost:8080/tarefas/`,tarefa,this.token).pipe(catchError(this.handleError));
  }


  public getByIdTarefa(tarefaId:string ):Observable<iTarefas>{
    return this.httpClient.get<iTarefas>(`http://localhost:8080/tarefas/${tarefaId}`,this.token).pipe(catchError(this.handleError));
  }


  public deleteTarefa(tarefaId: number):Observable<{}>{
    return this.httpClient.delete<iTarefas>(`http://localhost:8080/tarefas/${tarefaId}`,this.token).pipe(catchError(this.handleError));
  }

  // STATUS //


  public getByIdstatus(id:number):Observable<Status>{
    return this.httpClient.get<Status>(`http://localhost:8080/status/${id}`,this.token)

  }

  public getAllstatus(): Observable<Status[]>{
    return this.httpClient.get<Status[]>('http://localhost:8080/status',this.token).pipe(catchError(this.handleError));
  }
  
  


  //ERROR//

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
