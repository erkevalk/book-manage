import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {

  f1: any;
  b1: any;
  f2: any;
  b2: any;
  f3: any;
  b3: any;
  f4: any;
  b4: any;

  constructor() { }

  ngOnInit(): void {
  }


  readImageF1(event: any) {
    console.log('event in readimage', event);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.f1 = reader.result;

      reader.readAsDataURL(file);
    }
  }

  readImageB1(event: any) {
    console.log('event in readimage', event);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.b1 = reader.result;

      reader.readAsDataURL(file);
    }
  }

  readImageF2(event: any) {
    console.log('event in readimage', event);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.f2 = reader.result;

      reader.readAsDataURL(file);
    }
  }

  readImageB2(event: any) {
    console.log('event in readimage', event);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.b2 = reader.result;

      reader.readAsDataURL(file);
    }
  }

  readImageF3(event: any) {
    console.log('event in readimage', event);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.f3 = reader.result;

      reader.readAsDataURL(file);
    }
  }

  readImageB3(event: any) {
    console.log('event in readimage', event);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.b3 = reader.result;

      reader.readAsDataURL(file);
    }
  }

  readImageF4(event: any) {
    console.log('event in readimage', event);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.f4 = reader.result;

      reader.readAsDataURL(file);
    }
  }

  readImageB4(event: any) {
    console.log('event in readimage', event);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.b4 = reader.result;

      reader.readAsDataURL(file);
    }
  }


}
