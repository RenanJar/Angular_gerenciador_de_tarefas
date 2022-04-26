import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../service/tarefa.service';
import{iTarefas} from '../model/iTarefas';
import { Tarefas } from '../model/Tarefas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loading: boolean=false;
  public tarefas: iTarefas[] = [];
  public tarefa: Tarefas= new Tarefas;
  public errorMessage: string|null = null;

  constructor(private tarefaService: TarefaService) { }

  

  ngOnInit(): void {

    this.getAllTarefasFromServer()

  }

  public getAllTarefasFromServer(){
    
    this.tarefaService.getAlltarefas().subscribe((data:iTarefas[])=>{
      this.tarefas= data;
    },(error)=>{
      this.errorMessage = error;
    });
  }

  public clickDeleteContact(tarefaId: number | undefined){
    if(tarefaId){
      this.tarefaService.deleteTarefa(tarefaId).subscribe((data:{})=>{
        this.getAllTarefasFromServer();
    

      },(error)=>{
        this.errorMessage=error;
      });
    }

  }

}
