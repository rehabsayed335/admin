import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsModule} from './components/layouts/layouts.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutsModule
  ]
})
export class SharedModule { }
