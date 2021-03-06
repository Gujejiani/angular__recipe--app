import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";

import { AppComponent } from "./app.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { DropDownDirective } from "./shared/dropdown.directive";
import { RoutingModule } from "./app-routing.module";
import { RecipeEmptyComponent } from "./recipe-empty/recipe-empty.component";
import { RecipeEditComponent } from "../../recipe-edit/recipe-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirective,
    RecipeEmptyComponent,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, FormsModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
