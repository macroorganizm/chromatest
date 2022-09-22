import { Component, Input } from '@angular/core';

@Component({
  selector: 'olchromatic-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text = 'label';
  @Input() isRed = false;
}
