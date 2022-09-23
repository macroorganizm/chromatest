import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';
import { ChUilibStarModule } from '@olchromatic/ch-uilib/star';

@NgModule({
  imports: [CommonModule, ChUilibStarModule],
  declarations: [RatingComponent],
  exports:[RatingComponent]
})
export class ChUilibRatingModule {}
