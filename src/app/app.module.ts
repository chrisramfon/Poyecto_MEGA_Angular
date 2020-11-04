import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
<<<<<<< Updated upstream
    AppComponent
=======
    AppComponent,
    MenuComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
    EmpleadoComponent,
    ClienteComponent
    
    
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
