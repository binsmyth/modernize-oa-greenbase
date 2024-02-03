import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsComponent } from './settings/settings.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ContentSectionComponent } from './content-section/content-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SettingsComponent,
    ContentSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
