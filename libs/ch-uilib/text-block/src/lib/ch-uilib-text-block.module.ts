import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBlockComponent } from './text-block.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TextBlockComponent],
  exports:[TextBlockComponent]
})
export class ChUilibTextBlockModule {}
