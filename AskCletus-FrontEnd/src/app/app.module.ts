import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarHomeComponent } from './userBar/bar-home/bar-home.component';
import { AddIngredientComponent } from './userBar/add-ingredient/add-ingredient.component';

import { DrinkHistoryComponent } from './drinkHistory/drink-history/drink-history.component';

import { UserHomeComponent } from './user/user-home/user-home.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { GetUserComponent } from './user/get-user/get-user.component';
import { GetUsersComponent } from './user/get-users/get-users.component';
import { NavigationComponent } from './navigation/navigation.component';




@NgModule({
  declarations: [
    AppComponent,
    BarHomeComponent,
    AddIngredientComponent,
    DrinkHistoryComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    NavigationComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
