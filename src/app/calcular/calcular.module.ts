import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcularImcComponent } from './calcular-imc/calcular-imc.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalcularService } from './calcular.service';
import { HttpModule } from '@angular/http';
import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ListarComponent } from './listar/listar.component';
import { RouterModule } from '@angular/router';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ChartModule } from 'primeng/chart';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';


@NgModule({
  declarations: [CalcularImcComponent, ListarComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    TableModule,
    RouterModule,
    RadioButtonModule,
    TooltipModule,
    KeyFilterModule,
    ChartModule,

    HttpModule
  ],
  exports: [CalcularImcComponent, ListarComponent],
  providers: [CalcularService]
})
export class CalcularModule {}
