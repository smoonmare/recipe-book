import { Component, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.interface';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) shoppingListForm?: NgForm;
  subscription?: Subscription;
  editMode: boolean = false;
  editedItemIndex?: number;
  editedItem?: Ingredient;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingService.startedEditing
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedItem = this.shoppingService.getIngredient(index);
          this.shoppingListForm?.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }

  onAddItem(form: NgForm) {
    // const newIngredient: Ingredient = {
    //   name: inputName.value ? inputName.value : 'Ingredient Name',
    //   amount: inputAmount.value ? inputAmount.valueAsNumber : 0 };

    const value = form.value;
    const newIngredient: Ingredient = {name: value.name, amount: value.amount};
    this.shoppingService.addIngredient(newIngredient);
    // this.ingredientAdded.emit({
    //   name: inputName.value ? inputName.value : 'Ingredient Name',
    //   amount: inputAmount.value ? inputAmount.valueAsNumber : 0
    // });
  }

}
