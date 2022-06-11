import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { ResumenContactosComponent } from './components/resumen-contactos/resumen-contactos.component';

const routes: Routes = [
{path: "", component:HomeComponent},
{path:"catalogo", component:CatalogoComponent},
{path: "contacto", component:ContactoComponent},
{path: "resumen-contactos", component:ResumenContactosComponent},
{path: "editar-contacto/:id", component: ContactoComponent},

//{path: "404", component: NotFoundComponent},
// // {path: "**", redirectTo: '404', pathMatch: "full"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
