import { Food } from './food';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {
  private foodsUrl = 'http://localhost:3000/api/foodlist';

  constructor(private http: HttpClient) {}

  public getFoods(): Promise<Food[]>{
    return this.http
      .get(this.foodsUrl)
      .toPromise()
      .then(response => response as Food[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something went wrong', error);
    return Promise.reject(error.message || error);
  }
}