import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiModule } from '@olchromatic/ui';
import { ChUilibButtonNewModule } from '@olchromatic/ch-uilib/button-new';
import { ChUilibTextBlockModule } from '@olchromatic/ch-uilib/text-block';
import { ChUilibRatingModule } from '@olchromatic/ch-uilib/rating';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiModule, ChUilibButtonNewModule, ChUilibTextBlockModule, ChUilibRatingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
