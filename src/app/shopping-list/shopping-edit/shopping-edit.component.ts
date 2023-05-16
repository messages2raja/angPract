import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shared/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('recipeNameInput', { static: false }) recipeNameInput: ElementRef;
  @ViewChild('recipeAmountInput', { static: false })
  recipeAmountInput: ElementRef;
  constructor(private shoppingService: ShoppingService) {}
  AddItem() {
    const nameRefVal = this.recipeNameInput.nativeElement.value;
    const amountRefVal = this.recipeAmountInput.nativeElement.value;
    const newIngredient = new Ingredient(nameRefVal, amountRefVal);
    this.shoppingService.addIngredient(newIngredient);
  }
}
