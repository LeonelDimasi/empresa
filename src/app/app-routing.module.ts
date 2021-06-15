import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaEmpleadoComponent } from './alta-empleado/alta-empleado.component';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';


const routes: Routes = [
  
  { path: 'alta-empleado', component: AltaEmpleadoComponent },
  { path: 'lista-empleado', component: ListaEmpleadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
