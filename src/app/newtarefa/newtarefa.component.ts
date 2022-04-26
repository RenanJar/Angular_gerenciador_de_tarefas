import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { iTarefas } from '../model/iTarefas';
import { Status } from '../model/Status';
import { Tarefas } from '../model/Tarefas';
import { Usuario } from '../model/Usuario';
import { statusService } from '../service/status.service';
import { TarefaService } from '../service/tarefa.service';

@Component({
  selector: 'app-newtarefa',
  templateUrl: './newtarefa.component.html',
  styleUrls: ['./newtarefa.component.css']
})
export class NewtarefaComponent implements OnInit {
  public TAREFA: Tarefas = new Tarefas 
  public tarefa: iTarefas= {} as iTarefas;
  public status: Status[] = [] as Status[];
  public errorMessage: string | null = null;
  public idstatus: number;
  public STATUS = new Status();
  public usuario = new Usuario();
  public idusuario = environment.id;
  
  



  constructor(private tarefaService: TarefaService,private statusservice: statusService,
    private router: Router) { }

  ngOnInit(): void {
    this.tarefaService.getAllstatus().subscribe((data) =>{
      this.status = data;
    }, (error)=> {
      this.errorMessage = error;
    })
  }

  public createSubmit(){
    
    this.usuario.id= this.idusuario
    this.STATUS.id= this.idstatus

    this.tarefa.status= this.STATUS
    this.tarefa.usuario= this.usuario
    
    this.tarefaService.createtarefa(this.tarefa).subscribe((data)=>{
      this.router.navigate(['/Home']).then();
    },(error)=> {
      this.errorMessage = error;
      alert('Erro')
      this.router.navigate (['/newtarefa']).then();
    })
  }

}
