import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.interface';
import { Ingredient } from '../shared/ingredient.interface';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      name: 'Buffalo Chicken Sandwich',
      description: `Blue cheese crumbles. Sliced juicy red onion. 
      Boneless chicken breasts marinated in Buffalo Wings Sauce and blue cheese dressing.`,
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Barbecue_pork_sandwiches.jpg',
      ingredients: [
        {
          name: 'Boneless skinless chicken breasts (pieces)',
          amount: 4
        },
        {
          name: 'Red Hot Buffalo Wing Sauce (oz)',
          amount: 12
        },
        {
          name: 'Blue cheese (cup)',
          amount: 0.25
        },
        {
          name: 'Kaiser rolls',
          amount: 4
        },
        {
          name: 'Blue cheese crumbles (cup)',
          amount: 0.25
        },
        {
          name: 'Lettuce',
          amount: 1
        },
        {
          name: 'Tomato',
          amount: 1
        },
        {
          name: 'Onion',
          amount: 1
        },
      ]
    },
    {
      name: 'Pasta Alfredo',
      description: `Creamy, comforting, absolutely delicious, and super easy.`,
      imagePath: 'https://img.delo-vcusa.ru/2012/04/DSC_0415-620x360.jpg',
      ingredients: [
        {
          name: 'Fettuccine (oz)',
          amount: 12
        },
        {
          name: 'Unsalted butter (cup)',
          amount: 0.25
        },
        {
          name: 'Parmesan cheese (cup)',
          amount: 0.75
        }
      ]
    }
  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
