import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.modal";
import { Subject } from "rxjs/Subject";
@Injectable({ providedIn: "root" })
export class ShoppingListService {
  ingredientAdded = new Subject<Ingredient>();
  ingredients: Ingredient[] = [
    new Ingredient("pear", 22),
    new Ingredient("apple", 25),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredients: Ingredient) {
    this.ingredients.push(ingredients);
    console.log(this.ingredients);
    console.log(ingredients);
  }
}
