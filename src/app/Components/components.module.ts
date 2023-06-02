import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardItemComponent } from './card-item/card-item.component';
import { RecipePageModule } from '../pages/recipepage/recipe-page.module';
import { RecipepageComponent } from '../pages/recipepage/recipepage.component';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CardItemComponent],
  exports: [CardItemComponent]
})
export class ComponentsModule{}
