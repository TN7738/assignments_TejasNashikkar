import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../food';
import { FoodDataService } from '../food.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [FoodDataService]
})

export class CreateComponent implements OnInit {

  public newFood: Food ={
    foodItem: '',
    description: '',
    img: '',
    calories: '',
    price: '',
    _id: ''
  };
  constructor(
    private foodDataService: FoodDataService,
    private route:Router
  ) { }

  registerUser(form: NgForm) {
    console.log(form.value);
  }

  ngOnInit(): void {
  }
  public createNewFood(newFood:Food):void{
    this.foodDataService.createFood(newFood);
  }

}
