import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';


const routes:Routes = [
  {path:'busqueda/:q', component:BusquedaComponent},
  {path:'busqueda', component:BusquedaComponent},

];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class BusquedaRoutingModule { }
