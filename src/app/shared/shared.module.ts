import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { LoadingComponent } from './loading-spinner/loading/loading.component';
import { DropdownDirective } from './dropdown.directive';
import { PlaceholderDirective } from './alert/placeholder.directive';



@NgModule({
  declarations: [
    DropdownDirective,
    LoadingComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    LoadingComponent,
    AlertComponent,
    PlaceholderDirective
  ]
})
export class SharedModule { }
