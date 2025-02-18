import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

//MY COMPONENTS & MODULES
import { MyStoreRoutingModule } from './my-store-routing.module';
import { StatusProductPageComponent } from './pages/status-product-page/status-product-page.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SellProductComponent } from './pages/sell-product/sell-product.component';
import { NewProductComponent } from './pages/new-product-page/new-product.component';
import { SellHistoryPageComponent } from './pages/sell-history-page/sell-history-page.component';
import { MyProfilePageComponent } from './pages/my-profile-page/my-profile-page.component';

//MATERIAL YOU
import {MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatProgressBar} from '@angular/material/progress-bar';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatButton, MatFabAnchor, MatFabButton, MatIconButton, MatMiniFabButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {MatCardActions, MatCardContent, MatCardHeader, MatCardImage, MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatInput} from '@angular/material/input';
import {MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRow, MatTable, MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatCalendar, MatDatepickerModule} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {MatIcon} from '@angular/material/icon';



@NgModule({
  declarations:
  [
    LayoutComponent,
    SidebarComponent,
    DashboardPageComponent,
    SellProductComponent,
    NewProductComponent,
    SellHistoryPageComponent,
    MyProfilePageComponent,
    StatusProductPageComponent
  ],
  imports:
  [
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
    MatPaginatorModule,
    MatSortModule,
    MatGridList,
    MatGridTile,
    MatCalendar,
    MatDatepickerModule,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatIconButton,
    MatMiniFabButton,
    MatFabAnchor,
    MatFabButton,
    ReactiveFormsModule,
    MatProgressBar,
  ],
  exports: [],
  providers: [
  {
    provide: DateAdapter,
    useClass: MomentDateAdapter,
  },
  { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class MyStoreModule { }
