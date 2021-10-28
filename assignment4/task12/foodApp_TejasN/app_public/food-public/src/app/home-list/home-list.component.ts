import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodDataService } from '../food.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  foods: Food[]

  constructor(private foodService: FoodDataService, private route: ActivatedRoute) { }

  private getFoods() : void {
    this.foodService
      .getFoods()
      .then((foods: Food[]) => {
        this.foods = foods.map(food => {
          return food;
        });
      });
  }

  ngOnInit() {
    this.getFoods();
  }

}
