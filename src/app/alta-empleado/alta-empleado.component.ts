import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmpleadoServService } from '../empleado-serv.service';
import { Employee } from '../dto/employee';
@Component({
  selector: 'app-alta-empleado',
  templateUrl: './alta-empleado.component.html',
  styleUrls: ['./alta-empleado.component.scss']
})
export class AltaEmpleadoComponent implements OnInit {
  departamentos = [
    { value: 'contabilidad', viewValue: 'Contabilidad' },
    { value: 'marketing', viewValue: 'Marketing' },
    { value: 'sistemas', viewValue: 'Sistemas' }
  ];
  selectedValue: string;
  constructor(
    private formBuilder: FormBuilder,
    private empleadoServ: EmpleadoServService,
  ) {}
  
  ngOnInit(): void {
  }

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    departamento: ['', Validators.required],
    age: ['']
  });

  saveForm() {
    console.log('Form data is ', this.profileForm.value);
    let empl: Employee = {
      age: this.profileForm.value.age,
      lastName: this.profileForm.value.lastName,
      name: this.profileForm.value.firstName,
      place: this.profileForm.value.departamento,

    };

    this.empleadoServ.newEmployee(empl);
  }



}
