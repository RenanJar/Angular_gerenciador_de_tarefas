import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EdittarefaComponent } from './edittarefa/edittarefa.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewtarefaComponent } from './newtarefa/newtarefa.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},

  {path:'login', component: LoginComponent},
  {path:'cadastrar', component: CadastroComponent},
  {path:'Home',component:HomeComponent},
  {path:'newtarefa',component:NewtarefaComponent},
  {path:'edit/:tarefaId',component:EdittarefaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
