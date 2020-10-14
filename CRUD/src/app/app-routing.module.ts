import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarEditarComentarioComponent } from './componets/agregar-editar-comentario/agregar-editar-comentario.component';
import { ListarComentarioComponent } from './componets/listar-comentario/listar-comentario.component';
import { VerComentarioComponent } from './componets/ver-comentario/ver-comentario.component';

const routes: Routes = [
  {path: 'agregar', component: AgregarEditarComentarioComponent},
  {path: 'editar/:idComentario', component: AgregarEditarComentarioComponent},
  {path: 'ver/:idComentario', component: VerComentarioComponent},
  {path: '', component: ListarComentarioComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
