import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.interface';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  @Input() selectedRecipe?: Recipe

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

}
