import { Component, Input } from '@angular/core';

@Component({
  selector: 'olchromatic-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss'],
})
export class TextBlockComponent {
  @Input() bordered = false;
}
