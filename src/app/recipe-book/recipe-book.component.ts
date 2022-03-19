import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.interface';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService]
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