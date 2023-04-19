import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule],
  providers:[NavController]
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(public nav: NavController) {}



  public goToTab3(){
    this.nav.navigateForward('/tabs/tab3');
    
  }
}
