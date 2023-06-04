import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardItemComponent } from './card-item/card-item.component';
import { RecipePageModule } from '../pages/recipepage/recipe-page.module';
import { RecipepageComponent } from '../pages/recipepage/recipepage.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CardItemComponent],
  exports: [CardItemComponent]
})
export class ComponentsModule{}
