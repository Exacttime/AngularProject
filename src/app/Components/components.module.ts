import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardItemComponent } from './card-item/card-item.component';
import { CommonModule } from '@angular/common';
import { CardlistComponent } from './cardlist/cardlist.component';

@NgModule({
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CardItemComponent,CardlistComponent],
  exports: [CardItemComponent,CardlistComponent]
})
export class ComponentsModule{}
