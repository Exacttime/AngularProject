import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardItemComponent } from './card-item/card-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CardItemComponent],
  exports: [CardItemComponent]
})
export class ComponentsModule{}
