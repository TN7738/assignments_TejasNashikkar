import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Phone } from '../phone';
import { PhoneDataService } from '../phone.service';
import { FormArray, FormControl, FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [PhoneDataService]
})

export class CreateComponent implements OnInit {

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

  newPhone = new Phone('', '', [''], [''], '', '', []);

  constructor(
    private phoneDataService: PhoneDataService,
    private route:Router,
    private formBuilder: FormBuilder
  ) {
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

  ngOnInit(): void {
  }
  public createNewPhone(newPhone:Phone):void{
    newPhone.storage_options = this.form.value.storage;
    newPhone.colors = this.form.value.color;
    this.phoneDataService.createPhone(newPhone);
  }

}
