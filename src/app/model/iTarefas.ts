import { Status } from "./Status";
import { Usuario } from "./Usuario";

export interface iTarefas{

     idtarefa: number;
     titulotarefa: string;
     descricaotarefa: string;
     prazoconclusao: Date;
     datapostagem: Date;
     status: Status;
     usuario: Usuario;
}