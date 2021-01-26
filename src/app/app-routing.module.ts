import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciComponent } from './components/inici/inici.component';
import { NoticiesComponent } from './components/noticies/noticies.component';
import { LaboratorisComponent } from './components/laboratoris/laboratoris.component';
import { ProvaComponent } from './components/prova/prova.component';
import { EvolucioComponent } from './components/evolucio/evolucio.component';
const routes: Routes = [
  {path: 'inici', component: IniciComponent},
  {path: 'laboratoris', component: LaboratorisComponent},
  {path: 'prova', component: ProvaComponent},
  {path: 'noticies', component: NoticiesComponent},
  {path: 'evolucio', component: EvolucioComponent},
  { path: '',   redirectTo: '/inici', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
