import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-tracker',
  template: `
  <div class="container">
    <div id="header">
      <h1>Meal Tracker</h1>
      <img id="logo" src="./../resources/images/logo.png">
    </div>
    <div id="spacer">
    </div>
    <div id="content" class="row">
      <div id="new-meal" class="col-sm-3">
        <new-meal
          (newMealSender) = "addMeal($event)"
        ></new-meal>
      </div>
      <div id="meal-list" class="col-sm-6">
        <h4>Meals</h4>
        <meal-list
          [childMealList] = "masterMealList"
          (clickSender) = "showDetails($event)"
        ></meal-list>
      </div>
      <div id="edit-meal" class="cold-sm-3">
        <edit-meal
          [childSelectedMeal] = "selectedMeal"
          (doneClickedSender) = "doneEditing()"
        ></edit-meal>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Egg Sandwich", 340, "Breakfast", "Egg, cheese, bread."),
    new Meal("Fruit Salad", 124, "Snack", "Raspberries, blackberries, and blueberries.. oh my!"),
    new Meal("Cheeseburger", 303, "Lunch", "🍔")
  ]

  selectedMeal: Meal = null;

  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }

  doneEditing() {
    this.selectedMeal = null;
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }

}
