import { Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { ListadoComponent } from './components/listado/listado.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: RegistroComponent},
    { path: 'listado', component: ListadoComponent},
];
