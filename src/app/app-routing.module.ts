import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./layout/layout.module").then(m => m.LayoutModule),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

