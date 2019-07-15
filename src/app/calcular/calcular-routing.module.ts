import { NgModule } from '@angular/core';
import { CalcularImcComponent } from './calcular-imc/calcular-imc.component';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';


const routes: Routes = [
    {path: 'listar', component: ListarComponent},
    {path: 'calcular', component: CalcularImcComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ], exports: [ RouterModule ]
})
export class CalcularRoutingModule{}
