import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.interface';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    {
      name: 'Test Recipe 1',
      description: 'Test Recipe Description',
      imagePath: 'https://live.staticflickr.com/65535/51007612197_4001c29eae_b.jpg'
    },
    {
      name: 'Test Recipe 2',
      description: 'Test Recipe Description',
      imagePath: 'https://live.staticflickr.com/65535/51007612197_4001c29eae_b.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
