import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyStoreRoutingModule } from './my-store-routing.module';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import {MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import {MatButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import { SellProductComponent } from './pages/sell-product/sell-product.component';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule
} from '@angular/material/card';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    DashboardPageComponent,
    SellProductComponent
  ],
  imports: [
    MatSidenavModule,
    CommonModule,
    MyStoreRoutingModule,
    MatSidenavContainer,
    MatNavList,
    MatListItem,
    MatButton,
    MatToolbar,
    MatCardModule,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardImage,

  ],
  exports: []
})
export class MyStoreModule { }
