import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService],
})
export class RecipeComponent implements OnInit {
  recipeSelected: Recipe;
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
      this.recipeSelected = recipe;
    });
  }
}
