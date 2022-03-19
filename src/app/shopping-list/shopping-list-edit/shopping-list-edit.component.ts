import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.interface';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(inputName: HTMLInputElement, inputAmount: HTMLInputElement) {
    const newIngredient: Ingredient = {
      name: inputName.value ? inputName.value : 'Ingredient Name',
      amount: inputAmount.value ? inputAmount.valueAsNumber : 0 };
    this.shoppingService.addIngredient(newIngredient);
    // this.ingredientAdded.emit({
    //   name: inputName.value ? inputName.value : 'Ingredient Name',
    //   amount: inputAmount.value ? inputAmount.valueAsNumber : 0
    // });
  }

}
