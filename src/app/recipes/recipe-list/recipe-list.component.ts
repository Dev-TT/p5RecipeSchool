import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A Test Recipe', 'Test Description', 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3-1024x1536.jpg'),
    new Recipe('A Test Recipe2', '2nd Test Description', 'https://i2.wp.com/www.primaverakitchen.com/wp-content/uploads/2017/08/Easy-One-Pan-Cauliflower-Curry-Recipe.jpg'),
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
