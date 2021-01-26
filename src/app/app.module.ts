import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NoticiesComponent } from './components/noticies/noticies.component';
import { LaboratorisComponent } from './components/laboratoris/laboratoris.component';
import { ProvaComponent } from './components/prova/prova.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { EvolucioComponent } from './components/evolucio/evolucio.component';
import { AppRoutingModule } from './app-routing.module';
import { IniciComponent } from './components/inici/inici.component';
import {AgmCoreModule} from '@agm/core';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './components/shared/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NoticiesComponent,
    LaboratorisComponent,
    ProvaComponent,
    NavbarComponent,
    EvolucioComponent,
    IniciComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzPWl_H79H5eTUOITMk3OiS2La2DT-vag'
    }),
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
