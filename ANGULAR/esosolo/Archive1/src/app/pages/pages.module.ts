import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { OnboardingModule } from './onboarding/onboarding.module';
import { ErrorModule } from './error/error.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, DashboardModule, OnboardingModule, ErrorModule],
  exports: [DashboardModule, OnboardingModule, ErrorModule],
})
export class PagesModule {}
