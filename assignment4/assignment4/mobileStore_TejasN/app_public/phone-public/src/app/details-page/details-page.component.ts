import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PhoneDataService } from '../phone.service';
import { Phone } from '../phone';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [PhoneDataService]
})
export class DetailsPageComponent implements OnInit {

  constructor(
    private phoneDataService: PhoneDataService, 
    private route: ActivatedRoute
  ) 
  { }
  
  newPhone = new Phone('', '', [''], [''], '', '', []);
  
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.phoneDataService.getSinglePhone(params['phoneid'])
      })
    )
    .subscribe((newPhone: Phone) => {
      this.newPhone = newPhone;
    });
  }
}
