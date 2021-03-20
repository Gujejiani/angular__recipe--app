import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Ingredient } from "../shared/ingredient.modal";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientAdded.subscribe(
      (ingredients: Ingredient) => {
        this.shoppingListService.addIngredient(ingredients);
        this.ingredients.push(ingredients);
        console.log(this.shoppingListService.ingredients);
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  // ingDataRecived(ing: Ingredient) {
  //   this.ingredients.push(ing);
  //   console.log(ing);
  // }
}
