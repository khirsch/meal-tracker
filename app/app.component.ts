import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-tracker',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list
    ></meal-list>
    <edit-meal
    ></edit-meal>
    <new-meal
    ></new-meal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Egg Sandwich", "Breakfast", 340, "Egg, cheese, bread.")
  ]
}
