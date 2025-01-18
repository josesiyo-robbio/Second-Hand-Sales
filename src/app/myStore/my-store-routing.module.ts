import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {SellProductComponent} from './pages/sell-product/sell-product.component';
import {NewProductComponent} from './pages/new-product-page/new-product.component';
import {SellHistoryPageComponent} from './pages/sell-history-page/sell-history-page.component';
import {MyProfilePageComponent} from './pages/my-profile-page/my-profile-page.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children:
    [
    { path  :   'dashboard',    component   : DashboardPageComponent  },
    { path  :   'sell-item',    component   : SellProductComponent    },
    { path  :   'new-product',  component   : NewProductComponent     },
    { path  :   'sell-history',  component  : SellHistoryPageComponent     },
    { path  :   'my',  component            : MyProfilePageComponent     },
    { path  :   '**',           redirectTo  : 'dashboard', pathMatch: 'full'           },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyStoreRoutingModule { }
