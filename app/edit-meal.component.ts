import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h4>Edit Meal</h4>
        <div>
          <label>Name:</label>
          <input type="text" [(ngModel)]="childSelectedMeal.name">
        </div>
        <div>
          <label>Calories:</label>
          <input type="number" [(ngModel)]="childSelectedMeal.calories">
        </div>
        <div>
          <label>Type:</label>
          <input type="text" [(ngModel)]="childSelectedMeal.type">
        </div>
        <div>
          <label>Details:</label>
          <input type="text" [(ngModel)]="childSelectedMeal.details">
        </div>
        <button class="btn" (click)="doneClicked()">Done</button>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();

  doneClicked() {
    this.doneClickedSender.emit();
  }

}
