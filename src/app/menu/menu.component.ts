import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
  imports: [IonContent, IonHeader, IonMenu, IonTitle, IonToolbar],
})
export class MenuComponent {
  constructor() { }
}