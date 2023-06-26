import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipe-book/recipe.service';
import { Recipe } from '../recipe-book/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
      private http: HttpClient,
      private recipeService: RecipeService
  ) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put('https://recipe-book-62257-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
        console.log('Recipes were stored. Response:\n', response);
      });
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>('https://recipe-book-62257-default-rtdb.firebaseio.com/recipes.json')
      .subscribe(recipes => {
        console.log('Recipes are fetched. Response:\n', recipes);
        this.recipeService.setRecipes(recipes);
      });
  }
}
