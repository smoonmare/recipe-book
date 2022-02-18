import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.interface';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(inputName: HTMLInputElement, inputAmount: HTMLInputElement) {
    this.ingredientAdded.emit({
      name: inputName.value ? inputName.value : 'Ingredient Name',
      amount: inputAmount.value ? inputAmount.valueAsNumber : 0
    });
  }

}
