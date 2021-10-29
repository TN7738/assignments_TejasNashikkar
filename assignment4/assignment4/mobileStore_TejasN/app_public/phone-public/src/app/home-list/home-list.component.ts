import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneDataService } from '../phone.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [PhoneDataService]
})
export class HomeListComponent implements OnInit {

  phones: Phone[]

  constructor(private phoneService: PhoneDataService, private route: ActivatedRoute) { }

  private getPhones() : void {
    this.phoneService
      .getPhones()
      .then((phones: Phone[]) => {
        this.phones = phones.map(phone => {
          return phone;
        });
      });
  }

  ngOnInit() {
    this.getPhones();
  }

  public deleteThisPhone(phoneid: string):void{
    this.phoneService.deletePhone(phoneid);
  }
}
