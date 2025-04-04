import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonIcon, IonTabBar, IonTabButton, IonTabs, MenuController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, home, menu } from 'ionicons/icons';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, MenuComponent],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private menuController: MenuController) {
    addIcons({ home, heart, menu });
  }

  openMenu() {
    this.menuController.open('main-menu');
  }
}
