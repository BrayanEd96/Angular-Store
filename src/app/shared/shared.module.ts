import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CurrencyMxnPipe } from './pipes/currency-mxn/currency-mxn.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    CurrencyMxnPipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CurrencyMxnPipe,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
