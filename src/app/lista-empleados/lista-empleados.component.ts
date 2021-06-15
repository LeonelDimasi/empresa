import { Component, OnInit } from '@angular/core';
import { EmpleadoServService } from '../empleado-serv.service';

export interface Employee {
  name: string;
  lastName: string;
  place: string;
  age: number;
}

const ELEMENT_DATA: Employee[] = [
  { name: 'juan', lastName: 'perez', place: 'Sistemas', age:40},
  { name: 'pedro', lastName: 'rodriguez', place: 'Marketing',age:22},
];
@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss']
})
export class ListaEmpleadosComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lastName', 'place', 'age'];
  dataSource = ELEMENT_DATA;
  constructor(private empleadoServ:EmpleadoServService ) {
  }
  
  ngOnInit(): void {
    this.empleadoServ.newEmployee$.subscribe((data:any)=>{
      ELEMENT_DATA.push(data)
    })
  }
}
