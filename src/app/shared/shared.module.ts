import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { DefaultModalComponent } from './components/default-modal/default-modal.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
  declarations: [DefaultModalComponent, AutoFocusDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot()
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DefaultModalComponent,
    AutoFocusDirective,
    TooltipModule
  ]
})
export class SharedModule {}
