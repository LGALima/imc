import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalcularModule } from './calcular/calcular.module';
import { CalcularRoutingModule } from './calcular/calcular-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    CalcularRoutingModule,

    CalcularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
