import { Usuario , UserType} from './others/interfaz';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  title = 'Practica';
  user: Usuario = {
    ID: 23,
    nombre: "Diego",
    apellidos: "Fuenzalida Diaz",
    email: 'asdasd@asdasd',
    nick: 'Gran',
    contraseña: 'qwerty',
    tipo: UserType.Administrador  
  }
  
  usser: Usuario = <Usuario>{
    ID: 23,
    nombre: "Diego",
    apellidos: "Fuenzalida Diaz",
    email: 'asdasd@asdasd',
    nick: 'Gran',
    contraseña: 'qwerty',
    tipo: UserType.Administrador 
  }

  
}
