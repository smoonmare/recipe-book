import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesModule } from './recipe-book/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
