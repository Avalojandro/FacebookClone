import { Component, OnInit } from '@angular/core';

interface accesos
{
  icono; Any;
  nombre: string;
}

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
  styleUrls: ['./aplicaciones.component.scss']
})
export class AplicacionesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
