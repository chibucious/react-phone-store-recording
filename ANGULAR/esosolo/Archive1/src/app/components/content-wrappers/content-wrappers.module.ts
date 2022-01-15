import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContentWrapperComponent } from './page-content-wrapper/page-content-wrapper.component';
import { PageSectionWrapperComponent } from './page-section-wrapper/page-section-wrapper.component';
import { SectionHeaderComponent } from './section-header/section-header.component';

@NgModule({
  declarations: [
    PageContentWrapperComponent,
    PageSectionWrapperComponent,
    SectionHeaderComponent,
  ],
  imports: [CommonModule],
  exports: [
    PageContentWrapperComponent,
    PageSectionWrapperComponent,
    SectionHeaderComponent,
  ],
})
export class ContentWrappersModule {}
