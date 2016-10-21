import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';

@Component ({
  selector: 'meal-list',
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all" selected="selected">Show All</option>
      <option value="high">Show High-Calorie</option>
      <option value="low">Show Low-Calorie</option>
    </select>
    <div *ngFor="let currentMeal of childMealList | filter:selectedFilter">
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
  @Input() childSelectedFilter: String;
  @Output() clickSender = new EventEmitter();

  public selectedFilter: string = "all";
  onChange(optionFromMenu) {
    this.selectedFilter = optionFromMenu;
  }

  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
