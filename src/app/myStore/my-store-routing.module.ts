import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
    {
      path: 'dashboard',
      component: DashboardPageComponent
    },
      {
        path: '**',
        redirectTo: 'dashboard',
      }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyStoreRoutingModule { }
