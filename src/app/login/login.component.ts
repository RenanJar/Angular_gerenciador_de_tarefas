import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  UserLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.UserLogin).subscribe((resp: UsuarioLogin)=>{
      this.UserLogin = resp

      
      environment.token = this.UserLogin.token
      environment.id = this.UserLogin.id
      environment.nome = this.UserLogin.nome
      environment.foto = this.UserLogin.foto
      
      console.log(environment.nome)
      console.log(environment.token)
      console.log(environment.id)
      console.log(environment.foto)
      
      this.router.navigate(['/Home'])
      
    },erro=>{
      if(erro.status == 500){
        alert('Usuario ou senhas estão incorretos!')
      }
    }
    
    )
  }
}
