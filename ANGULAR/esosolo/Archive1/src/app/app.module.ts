import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientService } from './data/http-client/http-client.service';
import { PagesModule } from './pages/pages.module';
import { GeneralFormattingService } from './services/general-formatting/general-formatting.service';
import { MemoryCacheService } from './services/memory-cache/memory-cache.service';
import { ModalService } from './services/message/modal.service/modal.service';
import { OtpService } from './services/otp/otp.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /**
     * @description - These modules are custom modules created to handle routing and seperation of concerns for our pages and custom components.
     *
     * @required- Components module is required to be imported in the modules of pages where custom components are used
     */
    ComponentsModule,
    PagesModule,

    /**
     * @description - Http Memory service that mocks data requests to a database
     * @Todo - This is should be removed when pushing to production.
     */
    HttpClientModule,

    /**
     * @description - Custom date, time and date range picker module
     */
    NgxDaterangepickerMd.forRoot(),

    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse' }),
  ],
  providers: [
    MemoryCacheService,
    OtpService,
    GeneralFormattingService,
    ModalService,
    HttpClientService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
