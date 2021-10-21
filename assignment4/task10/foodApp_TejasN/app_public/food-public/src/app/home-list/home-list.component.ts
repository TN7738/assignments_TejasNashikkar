import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodDataService } from '../food.service';


@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [FoodDataService]
})
export class HomeListComponent implements OnInit {

  foods: Food[]

  constructor(private foodService: FoodDataService) { }

  private getFoods() : void {
    this.foodService
      .getFoods()
      .then((foods: Food[]) => {
        this.foods = foods.map(food => {
          console.log(food);
          return food;
        });
      });
  }

  ngOnInit() {
    this.getFoods();
  }

}
