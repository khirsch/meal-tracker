import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-tracker',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <img src="./../resources/images/icon.png">
    <meal-list
      [childMealList] = "masterMealList"
      (clickSender)="showDetails($event)"
    ></meal-list>
    <edit-meal
      [childSelectedMeal] = "selectedMeal"
      (doneClickedSender) = "doneEditing()"
    ></edit-meal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Egg Sandwich", "Breakfast", 340, "Egg, cheese, bread."),
    new Meal("Fruit Salad", "Snack", 124, "Raspberries, blackberries, and blueberries.. oh my!"),
    new Meal("Cheeseburger", "Lunch", 303, "🍔")
  ]

  selectedMeal: Meal = null;

  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }

  doneEditing() {
    this.selectedMeal = null;
  }

}
