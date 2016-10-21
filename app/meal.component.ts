import { Component, Input } from '@angular/core';
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
    </div>
  `
})

export class MealComponent {
  @Input() meal: Meal;
}
