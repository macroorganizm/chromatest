import { Component, Input } from '@angular/core';

@Component({
  selector: 'olchromatic-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent {
  @Input() stars = [1, 2];
}
