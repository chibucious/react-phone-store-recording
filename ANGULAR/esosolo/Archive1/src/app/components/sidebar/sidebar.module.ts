import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { RouterModule } from '@angular/router';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';

@NgModule({
  declarations: [SidebarComponent, SubmenuComponent, BreadCrumbsComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, SubmenuComponent, BreadCrumbsComponent],
})
export class SidebarModule {}
