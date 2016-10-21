import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-list',
  template: `
    <div *ngFor="let currentMeal of childMealList">
      <div class="col-sm-1">
        <img id="edit" src="./../resources/images/edit.png" (click)="editButtonClicked(currentMeal)">
      </div>
      <div class="col-sm-11">
        <meal-display [meal]="currentMeal"
        ></meal-display>
        <p id="divider">-------------------------</p>
      </div>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
