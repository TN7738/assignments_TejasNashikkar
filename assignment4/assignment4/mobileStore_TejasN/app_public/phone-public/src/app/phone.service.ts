import { Phone } from './phone';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PhoneDataService {
  private phonesUrl = 'http://localhost:3000/api/phonelist';

  constructor(private http: HttpClient, private route: Router) {}

  public getPhones(): Promise<Phone[]>{
    return this.http
      .get(this.phonesUrl)
      .toPromise()
      .then(response => response as Phone[])
      .catch(this.handleError);
  }

  public getSinglePhone(phoneId: String): Promise<Phone>{
    return this.http
      .get(this.phonesUrl + '/' + phoneId)
      .toPromise()
      .then(response => response as Phone)
      .catch(this.handleError);
  }

  public createPhone(newPhone:Phone): Promise<Phone>{
    return this.http
      .post(this.phonesUrl, newPhone)
      .toPromise()
      .then(response => {
        response as Phone
        this.route.navigate(['/phonelist']);
      })
      .catch(this.handleError);
  }

  public editPhone(newPhone:Phone, phoneId: String): Promise<Phone>{
    return this.http
      .put(this.phonesUrl + '/' + phoneId, newPhone)
      .toPromise()
      .then(response => {
        this.route.navigate(['/phonelist']);
      })
      .catch(this.handleError);
  }

  public deletePhone(phoneId: String): Promise<Phone>{
    return this.http
      .delete(this.phonesUrl + '/' + phoneId)
      .toPromise()
      .then(response => {
        this.route.navigate(['/phonelist']);
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something went wrong', error);
    return Promise.reject(error.message || error);
  }
}