import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewMasSobreComponent } from './componentes/mas-sobre/new-mas-sobre/new-mas-sobre.component';
import { EditMasSobreComponent } from './componentes/mas-sobre/edit-mas-sobre/edit-mas-sobre.component';

const routes: Routes = [
  {
    path:'home', component: HomeComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'nuevaexp', component: NewMasSobreComponent},
  { path: 'editexp/:id', component: EditMasSobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
