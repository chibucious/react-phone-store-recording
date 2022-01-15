import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from './modal/modal.module';
import { CardModule } from './card/card.module';
import { FormModule } from './form/form.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { ContentWrappersModule } from './content-wrappers/content-wrappers.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabSectionComponent } from './tabs/tab-section/tab-section.component';
// import { CustomOtpModule } from './custom-otp/custom-otp.module';

@NgModule({
  declarations: [
    PageTitleComponent,
    PageWrapperComponent,
    TopbarComponent,
    MobileMenuComponent,
    DropdownComponent,
    TabsComponent,
    TabSectionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    /**
     * Custom components modules
     */
    ModalModule,
    CardModule,
    FormModule,
    SidebarModule,
    ContentWrappersModule,
    // CustomOtpModule,
  ],
  exports: [
    PageTitleComponent,
    PageWrapperComponent,
    TopbarComponent,
    MobileMenuComponent,
    TabsComponent,
    TabSectionComponent,
    ReactiveFormsModule,

    /**
     * Custom components modules
     */
    ModalModule,
    CardModule,
    FormModule,
    SidebarModule,
    ContentWrappersModule,
    DropdownComponent,
    // CustomOtpModule,
  ],
})
export class ComponentsModule {}
