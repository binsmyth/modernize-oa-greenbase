import { Component } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [SidebarComponent, SettingsComponent]
})
export class AppComponent {
  title = 'settings';
}
