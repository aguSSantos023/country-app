import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-not-found-c',
  imports: [],
  templateUrl: './not-found-c.html',
  styleUrl: './not-found-c.css'
})
export class NotFoundC {
  location = inject(Location)

  goBack(){
    this.location.back()
  }
}
