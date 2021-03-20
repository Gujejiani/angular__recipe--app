import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Ingredient } from "src/app/shared/ingredient.modal";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: {
    id: number;
    name: string;
    imagePath: string;
    description: string;
    ingredients: Ingredient[];
  };
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // const id = +this.activatedRoute.snapshot.params["id"];

    // this.recipeDetail = this.recipeService.getRecipe(id);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.recipeDetail = this.recipeService.getRecipe(+params["id"]);
    });
  }
  addToShoppingList(ingredients: Ingredient[]) {
    console.log(ingredients);
    this.recipeService.addFromRecipeToShoppingList(ingredients);
  }
}
