import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MealComponent } from './meal.component';
import { MealListComponent } from './meal-list.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MealComponent,
    MealListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
