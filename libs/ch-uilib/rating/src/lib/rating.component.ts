import { Component, Input } from '@angular/core';

@Component({
  selector: 'olchromatic-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  @Input() rating: number = 3;

  get stars() {
    return Array.from(Array(this.rating).keys());
  }
}
