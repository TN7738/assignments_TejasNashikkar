import { Food } from './food';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {
  private foodsUrl = 'http://localhost:3000/api/foodlist';

  constructor(private http: HttpClient, private route: Router) {}

  public getFoods(): Promise<Food[]>{
    return this.http
      .get(this.foodsUrl)
      .toPromise()
      .then(response => response as Food[])
      .catch(this.handleError);
  }

  public getSingleFood(foodId: String): Promise<Food>{
    return this.http
      .get(this.foodsUrl + '/' + foodId)
      .toPromise()
      .then(response => response as Food)
      .catch(this.handleError);
  }

  public createFood(newFood:Food): Promise<Food>{
    return this.http
      .post(this.foodsUrl, newFood)
      .toPromise()
      .then(response => {
        response as Food
        this.route.navigate(['']);
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something went wrong', error);
    return Promise.reject(error.message || error);
  }
}