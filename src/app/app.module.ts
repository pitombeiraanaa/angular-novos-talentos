import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImcComponent } from './pages/imc/imc.component';
import { ResultadoComponent } from './pages/imc/components/resultado/resultado.component';
import { DiretivasComponent } from './pages/diretivas/diretivas.component';
import { EmitirEventosComponent } from './pages/emitir-eventos/emitir-eventos.component';
import { FilhoComponent } from './pages/emitir-eventos/components/filho/filho.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { RequisicoesComponent } from './pages/requisicoes/requisicoes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ImcComponent,
    ResultadoComponent,
    DiretivasComponent,
    EmitirEventosComponent,
    FilhoComponent,
    PipesComponent,
    RequisicoesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
