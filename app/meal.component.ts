import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  template: `
    <div>
      <h4>{{ meal.name }}</h4>
      <p>
      <label>Type:</label> <span>{{ meal.type }}</span>
      <br>
      <label>Details:</label> <span>{{ meal.details }}</span>
      <br>
      <label>Calories:</label> <span>{{ meal.calories }}</span>
      </p>
      <button class="btn" (click)="editButtonClicked(currentMeal)">Edit</button>
      <hr>
    </div>
  `
})

export class MealComponent {
  @Input() meal: Meal;
  @Output() clickSender = new EventEmitter();

  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

}
