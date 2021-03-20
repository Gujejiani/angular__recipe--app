import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeEditComponent } from "recipe-edit/recipe-edit.component";
import { RecipeEmptyComponent } from "./recipe-empty/recipe-empty.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "recipes",
    pathMatch: "full",
  },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      { path: "", component: RecipeEmptyComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipeDetailComponent },

      { path: ":id/edit", component: RecipeEditComponent },
    ],
  },
  { path: "shoppingList", component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class RoutingModule {}
