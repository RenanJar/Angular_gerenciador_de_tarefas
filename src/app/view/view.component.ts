import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { teste } from '../model/teste';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  
})
export class ViewComponent implements OnInit {

  teste=[{'titulo':'Arrasta e solta'},{'titulo':'melhorar interface'},{'titulo':'ajustar front'}]

  constructor() { }

  ngOnInit(): void {
  }
 
  drop(event:CdkDragDrop<teste[]>){
    console.log("Index Anterior= ", event.previousIndex);
    console.log("Atual Index= ",event.currentIndex);
    moveItemInArray(this.teste,event.previousIndex,event.currentIndex)
  }

}
