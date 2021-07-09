import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './componentes/BOTON/boton/boton.component';
import { EventosComponent } from './WEBADAS/eventos/eventos.component';
import { PokemonComponent } from './pokemon/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { BotonesPokemonComponent } from './src/app/componentes/botones-pokemon/botones-pokemon.component';
import { PokebotonComponent } from './componentes/pokeboton/pokeboton.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    EventosComponent,
    PokemonComponent,
    BotonesPokemonComponent,
    PokebotonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
