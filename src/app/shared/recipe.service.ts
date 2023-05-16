import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from './ingredient.model';
import { ShoppingService } from './shopping.service';
@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Big Fat Burger',
      'recipe description',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
      [new Ingredient('Buns', 2), new Ingredient('chicken', 1)]
    ),
    new Recipe(
      'Mexican Pizza',
      'recipe description',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
      [
        new Ingredient('Pizza Base', 1),
        new Ingredient('chicken', 20),
        new Ingredient('Mexican Sauce', 10),
      ]
    ),
  ];
  constructor(private shoppingService: ShoppingService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShopping(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
  selectedRecipe = new EventEmitter<Recipe>();
}
