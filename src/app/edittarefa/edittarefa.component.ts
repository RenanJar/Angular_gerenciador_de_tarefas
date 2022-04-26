import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Status } from '../model/Status';
import { Tarefas } from '../model/Tarefas';
import { TarefaService } from '../service/tarefa.service';

@Component({
  selector: 'app-edittarefa',
  templateUrl: './edittarefa.component.html',
  styleUrls: ['./edittarefa.component.css']
})
export class EdittarefaComponent implements OnInit {

  public tarefa: Tarefas = new Tarefas;
  public status: Status[] = [] as Status[];
  public tarefaid: string | null;
  public errorMessage: string | null = null;
  

  constructor(private activatedRoute: ActivatedRoute, private tarefaservice: TarefaService, private router: Router) {

   }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((param: ParamMap)=>{
      this.tarefaid = param.get('tarefaId');
    });

    if (this.tarefaid){
      this.tarefaservice.getByIdTarefa(this.tarefaid).subscribe((data)=>{
        this.tarefa= data;
        this.tarefaservice.getAllstatus().subscribe((data)=>{
          this.status=data;
        })
      },(error)=>{
        this.errorMessage = error;
      });
    }
  }

  public submitUpdate(){
    if (this.tarefaid){
      this.tarefaservice.updatetarefa(this.tarefa,this.tarefaid).subscribe((data)=>{
        this.router.navigate(['/Home']).then();
      },(error)=>{
        this.errorMessage = error;
        this.router.navigate([`/edit/${this.tarefaid}`]).then();
      })
    }

  }

}
