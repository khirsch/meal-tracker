import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-tracker',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list
      [childMealList] = "masterMealList"
    ></meal-list>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Egg Sandwich", "Breakfast", 340, "Egg, cheese, bread."),
    new Meal("Fruit Salad", "Snack", 124, "Raspberries, blackberries, and blueberries.. oh my!"),
    new Meal("Cheeseburger", "Dinner", 303, "🍔")
  ]
}
