import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path  : 'profile', loadChildren : ()  => import('./myStore/my-store.module').then(m => m.MyStoreModule) },
  { path  : '**', redirectTo : 'profile', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
