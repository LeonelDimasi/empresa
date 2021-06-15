import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs';
import { Employee } from './lista-empleados/lista-empleados.component';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoServService {
  newEmployee$: ReplaySubject<Employee> = new ReplaySubject(1);
  
  constructor() { }

  newEmployee(employee: Employee):ReplaySubject<Employee>  {
    this.newEmployee$.asObservable()
     this.newEmployee$.next(employee);
    return this.newEmployee$;
  }

 
}
