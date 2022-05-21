import { HttpHeaders } from '@angular/common/http';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { TarefaService } from '../service/tarefa.service';
import{iTarefas} from '../model/iTarefas';
import { Tarefas } from '../model/Tarefas';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loading: boolean=false;
  public tarefas: iTarefas[] = [];
  public tarefasconc: iTarefas[] = [];
  public tarefasatraz: iTarefas[] = [];
  public tarefa: Tarefas= new Tarefas;
  public errorMessage: string|null = null;
  captura= new EventEmitter();
  

  constructor(private tarefaService: TarefaService) { }

  

  ngOnInit(): void {

    this.getAllTarefasFromServer()

  }

  public getAllTarefasFromServer(){
    
    this.tarefaService.getAlltarefas().subscribe((data:iTarefas[])=>{
      for(var index of data ){
        
        if(index.status.id== 1){
          this.tarefas.push(index)
        }

        if(index.status.id== 2){
          this.tarefasconc.push(index)
        }

        if(index.status.id== 13){
          this.tarefasatraz.push(index)
        }
      }
      
    },(error)=>{
      this.errorMessage = error;
    });
  }

  public clickDeleteTarefa(tarefaId: number | undefined){
    if(tarefaId){
      this.tarefaService.deleteTarefa(tarefaId).subscribe((data:{})=>{
        this.getAllTarefasFromServer();
    

      },(error)=>{
        this.errorMessage=error;
      });
    }

  }

  drop(event:CdkDragDrop<iTarefas[]>){
    if(event.previousContainer === event.container){
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex);
    }else{
      this.captura.emit(Element)
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
        
      ); 
      switch(event.container.id){
        case 'cdk-drop-list-0':
          console.log('Em Andamento');
        
          this.tarefa.status.id=1;
          console.log(this.tarefa.titulotarefa,this.tarefa.status)
          break;

        case 'cdk-drop-list-1':
          console.log('Concluido');
          this.tarefa.status.id=2;
          console.log(this.tarefa.titulotarefa,this.tarefa.status)
          break;

        case 'cdk-drop-list-2':
          console.log('Em Atraso');
          this.tarefa.status.id=13;
          console.log(this.tarefa.titulotarefa,this.tarefa.status)
          break;  
      }
      
    }
  }

}
