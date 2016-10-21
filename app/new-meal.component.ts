import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  template: `
    <div>
      <h4>Add Meal</h4>
      <div>
        <label>Name:</label>
        <input #newName>
      </div>
      <div>
        <label>Calories:</label>
        <input #newCalories>
      </div>
      <div>
        <label>Type:</label>
        <input #newType>
      </div>
      <div>
        <label>Details:</label>
        <input #newDetails>
      </div>
      <button class="btn" (click)="
        addClicked(newName.value, newCalories.value, newType.value, newDetails.value);
        newName.value='';
        newCalories.value='';
        newType.value='';
        newDetails.value='';
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  addClicked(name: string, calories: number, type: string, details: string) {
    var newMealToAdd: Meal = new Meal(name, calories, type, details);
    this.newMealSender.emit(newMealToAdd);
  }

}
