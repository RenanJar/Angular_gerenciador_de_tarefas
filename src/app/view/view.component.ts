import { Component, EventEmitter, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { teste } from '../model/teste';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  
})
export class ViewComponent implements OnInit {

  public teste: teste[]= [];
  captura= new EventEmitter();
  task=new teste;
  

  EmAndamento=[{'titulo':'Arrasta e solta',status:1},{'titulo':'melhorar interface',status:1},{'titulo':'ajustar front',status:1}]
  Concluido=[{'titulo':'teste 2°coluna',status:1}]
  EmAtraso=[{'titulo':'teste 3°coluna',status:1}]

  constructor() { }

  ngOnInit(): void {
  }

 
 
  drop(event:CdkDragDrop<teste[]>){
    if(event.previousContainer === event.container){
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex);
    }else{
      switch(event.container.id){
        case 'cdk-drop-list-0':
          console.log('Em Andamento');
        
          this.task.status=1;
          console.log(this.task.titulo,this.task.status)
          break;

        case 'cdk-drop-list-1':
          console.log('Concluido');
          this.task.status=2;
          console.log(this.task.titulo,this.task.status)
          break;

        case 'cdk-drop-list-2':
          console.log('Em Atraso');
          this.task.status=3;
          console.log(this.task.titulo,this.task.status)
          break;  
      }
      this.captura.emit(Element)
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      ); 
    }
  }

}
