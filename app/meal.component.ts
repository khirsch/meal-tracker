import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  template: `
    <div>
      <p>
      <label>{{ meal.name }}</label>
      <br>
      <label>Calories:</label> <span>{{ meal.calories }}</span>
      <br>
      <label>Type:</label> <span>{{ meal.type }}</span>
      <br>
      <label>Details:</label> <span>{{ meal.details }}</span>
      </p>
    </div>
  `
})

export class MealComponent {
  @Input() meal: Meal;
}
