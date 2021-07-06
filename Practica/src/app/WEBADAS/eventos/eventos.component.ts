import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  estado: boolean = true
  titulo: string = ""
  log(e:Event) {
    console.log(e)
  }
  seleccion:string = ""
}
 