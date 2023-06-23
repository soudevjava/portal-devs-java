import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) { }
  ngOnInit(): void {
  }
  deslogar(){
    this.usuarioService.deslogar();
  }
}


