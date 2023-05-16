import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MasSobreComponent } from './componentes/mas-sobre/mas-sobre.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SocialesComponent } from './componentes/sociales/sociales.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavComponent } from './componentes/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './servicios/interceptorservice';
import { NewMasSobreComponent } from './componentes/mas-sobre/new-mas-sobre/new-mas-sobre.component';
import { EditMasSobreComponent } from './componentes/mas-sobre/edit-mas-sobre/edit-mas-sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MasSobreComponent,
    HabilidadesComponent,
    ProyectosComponent,
    SocialesComponent,
    FooterComponent,
    NavComponent,
    FormacionComponent,
    HomeComponent,
    LoginComponent,
    NewMasSobreComponent,
    EditMasSobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
