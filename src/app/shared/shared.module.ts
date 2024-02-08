import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatSidenavModule
  ],
  exports:[
    ToolbarComponent,
    MatButtonModule,
    MatButtonModule,
    MenuComponent,
    MatMenuModule,
    MatListModule,
    RouterModule,
    SidebarComponent,
    MatSidenavModule,
    FooterComponent
  ]
})
export class SharedModule { }
