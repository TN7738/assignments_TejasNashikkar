import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PhoneDataService } from '../phone.service';
import { Phone } from '../phone';
import { switchMap } from 'rxjs/operators';
import { FormArray, FormControl, FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-page',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [PhoneDataService]
})
export class EditComponent implements OnInit {

  form: FormGroup;
  storageList: any = [
    {description: '64GB', value: '64'},
    {description: "128GB", value: '128'},
    {description: "256GB", value: '256'},
    {description: "512GB", value: '512'},
    {description: "1TB", value: '1'}
  ];
  colorList: any = [
    {description: 'gold', value: '#faddd7'},
    {description: "blue", value: '#276787'},
    {description: "black", value: '#232a31'},
    {description: "white", value: '#faf6f2'},
    {description: "red", value: '#bf0013'},
    {description: "teal", value: '#a7c1d9'}
  ];

  constructor(
    private phoneDataService: PhoneDataService, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) 
  { 
    this.form = this.formBuilder.group({
      storage: this.formBuilder.array([], [Validators.required]),
      color: this.formBuilder.array([], [Validators.required])
    })
  }

  onStorageboxChange(e: any) {
    const storage_options: FormArray = this.form.get('storage') as FormArray;
    if (e.target.checked) {
      storage_options.push(new FormControl(e.target.value));
    } else {
       const index = storage_options.controls.findIndex(x => x.value === e.target.value);
       storage_options.removeAt(index);
    }
  }
  onColorboxChange(e: any) {
    const colors: FormArray = this.form.get('color') as FormArray;
    if (e.target.checked) {
      colors.push(new FormControl(e.target.value));
    } else {
       const index = colors.controls.findIndex(x => x.value === e.target.value);
       colors.removeAt(index);
    }
  }

  registerUser(form: NgForm) {
    console.log(form.value);
  }
  
  newPhone = new Phone('', '', [''], [''], '', '', []);
  
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.phoneDataService.getSinglePhone(params['phoneid'])
      })
    )
    .subscribe((newPhone: Phone) => {
      this.newPhone = newPhone;
      this.storageList = this.storageList.map((x:any) => {
        if(newPhone.storage_options.indexOf(x.value) > -1) {
          x.isChecked = true;
        }
        return x;
      });
      this.colorList = this.colorList.map((x:any) => {
        if(newPhone.colors.indexOf(x.value) > -1) {
          x.isChecked = true;
        }
        return x;
      })
    });
  }

  public editCurrentPhone(newPhone:Phone):void{
    newPhone.storage_options = this.storageList.filter((x:any) => { return x.isChecked}).map((y:any) => {return y.value});
    //newPhone.colors = this.form.value.color;
    newPhone.colors = this.colorList.filter((a:any) => { return a.isChecked}).map((b:any) => {return b.value});
    newPhone.reviews = [];
    let phoneId = newPhone._id;
    newPhone._id = "";
    this.phoneDataService.editPhone(newPhone, phoneId);
  }
}