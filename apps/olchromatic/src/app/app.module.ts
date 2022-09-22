import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiModule } from '@olchromatic/ui';
import { ChUilibButtonNewModule } from '@olchromatic/ch-uilib/button-new';
import { ChUilibTextBlockModule } from '@olchromatic/ch-uilib/text-block';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiModule, ChUilibButtonNewModule, ChUilibTextBlockModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
