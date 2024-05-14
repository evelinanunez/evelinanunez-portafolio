import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPortafolioComponent } from './dashboard-portafolio/dashboard-portafolio.component';
import { HomeComponent } from './dashboard-portafolio/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dashboard-portafolio/dashboard-portafolio.module').then(
        (m) => m.DashboardPortafolioModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }), // Restaura siempre el scroll del objeto window al realizar navegacion
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
