import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { SlideMenuModule } from 'primeng/slidemenu';



@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CalendarModule,
    DialogModule,
    InputTextModule,
    MenubarModule,
    TableModule,
    RatingModule,
    SlideMenuModule,
    // BrowserAnimationsModule
  ]
})
export class PrimeNgModule { }
