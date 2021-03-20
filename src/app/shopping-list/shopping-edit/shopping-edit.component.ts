import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.modal";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  @ViewChild("ingredient") ing: ElementRef;
  @ViewChild("quantity") quantity: ElementRef;

  ngOnInit(): void {}
  ingredientAdded() {
    this.shoppingListService.ingredientAdded.next(
      new Ingredient(
        this.ing.nativeElement.value,
        this.quantity.nativeElement.value
      )
    );
  }
}
