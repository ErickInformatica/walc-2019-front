import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [
  {path:'', loadChildren: './components/home/home.module#HomeModule'},
  {path:'home', loadChildren: './components/home/home.module#HomeModule'},
  {path:'principal', loadChildren: './components/homelog/homelog.module#HomelogModule'},
  {path:'logged', loadChildren: './components/logged/logged.module#LoggedModule'},
  {path:'track/:id', loadChildren: './components/track1/track1.module#Track1Module'},
  {path:'login', loadChildren: './components/login/login.module#LoginModule'},
  {path:'formulario', loadChildren: './components/formulario/formulario.module#FormularioModule'},
  {path:'info-evento', loadChildren: './components/info-evento/info-evento.module#InfoEventoModule'},
  {path:'patrocinadores', loadChildren: './components/patrocinadores/patrocinadores.module#PatrocinadoresModule'},
  {path:'users', loadChildren: './components/usuarios/usuarios.module#UsuariosModule'},
  {path:'users/track', loadChildren: './components/usuario-track/usuario-track.module#UsuarioTrackModule'},
  {path:'users/color', loadChildren: './components/usuario-color/usuario-color.module#UsuarioColorModule'},
  {path:'sede', loadChildren: './components/antecedentes/antecedentes.module#AntecedentesModule'},
  {path:'quienesSomos', loadChildren: './components/queiene-somos/queiene-somos.module#QueieneSomosModule'},
  {path:'instalaciones', loadChildren: './components/instalaciones/instalaciones.module#InstalacionesModule'},
  {path:'perfil', loadChildren: './components/perfil/perfil.module#PerfilModule'},
  {path:'**', loadChildren: './components/home/home.module#HomeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
