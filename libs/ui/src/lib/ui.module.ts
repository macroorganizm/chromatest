import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TextBlockComponent } from './text-block/text-block.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, TextBlockComponent],
  exports: [ButtonComponent, TextBlockComponent],
})
export class UiModule {}
