import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  Usuario: Usuario= new Usuario;
  confirmarSenha:string;
  tipousuario:string;
  
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)

  }

  confirmSenha(event:any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event:any){
    this.tipoUser = event.target.value
  }

  cadastrar(){
    this.Usuario.tipo= this.tipousuario

    if(this.Usuario.senha != this.confirmarSenha){
      alert('A senha está incorreto')
    }else{
      this.authService.cadastrar(this.Usuario).subscribe((resp:Usuario)=>{
        this.Usuario=resp
        this.router.navigate(['/login'])
        alert('Usuario cadastrado com sucesso!')
      })
    }
  }

}
