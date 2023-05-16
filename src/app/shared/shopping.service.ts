import { Ingredient } from './ingredient.model';

export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 10),
  ];
  getIngredients() {
    return this.ingredients;
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
