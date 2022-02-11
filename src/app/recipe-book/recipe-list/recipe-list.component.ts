import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.interface';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'Test Recipe',
      description: 'Test Recipe Description',
      imagePath: 'https://live.staticflickr.com/65535/51007612197_4001c29eae_b.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
