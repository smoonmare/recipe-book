import { Injectable } from '@angular/core';
import { Recipe } from './recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
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

  getRecipes() {
    return this.recipes.slice();
  }
}
