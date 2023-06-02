import { NgModule } from '@angular/core';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { BrowserModule } from '@angular/platform-browser';

import { RecipepageComponent } from './recipepage.component';


@NgModule({
    declarations: [RecipepageComponent],
    imports: [IonicModule, BrowserModule, IonicModule.forRoot()],
    bootstrap: [RecipepageComponent],
})
export class RecipePageModule { }
