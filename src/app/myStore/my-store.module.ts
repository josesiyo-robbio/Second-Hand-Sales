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
import { NewProductComponent } from './pages/new-product-page/new-product.component';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatInput} from '@angular/material/input';
import { SellHistoryPageComponent } from './pages/sell-history-page/sell-history-page.component';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatNoDataRow,
  MatRow,
  MatTable, MatTableModule
} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { MyProfilePageComponent } from './pages/my-profile-page/my-profile-page.component';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatCalendar, MatDatepickerModule} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, provideNativeDateAdapter} from '@angular/material/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import * as moment from 'moment';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    DashboardPageComponent,
    SellProductComponent,
    NewProductComponent,
    SellHistoryPageComponent,
    MyProfilePageComponent
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
    MatFormFieldModule,
    MatSelect,
    MatOption,
    MatInput,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatPaginator,
    MatHeaderCellDef,
    MatCellDef,
    MatSort,
    MatHeaderRowDef,
    MatNoDataRow,
    MatTableModule,
    MatPaginatorModule, // Si usas paginación
    MatSortModule,
    MatGridList,
    MatGridTile,
    MatCalendar,
    MatDatepickerModule,



  ],
  exports: [],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,  // Usa el adaptador de Moment.js
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class MyStoreModule { }
