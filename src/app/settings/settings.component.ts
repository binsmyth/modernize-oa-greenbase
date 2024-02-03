import { Component } from '@angular/core';
import { ContentSectionComponent } from '../content-section/content-section.component';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.css',
    standalone: true,
    imports: [ContentSectionComponent]
})
export class SettingsComponent {

}
