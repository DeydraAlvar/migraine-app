import { Component } from '@angular/core';
import { IonicModule, Platform } from '@ionic/angular';
import { MigraineStatusService } from '../services/migraine-status.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule],
  providers: [MigraineStatusService],
})
export class Tab1Page {
  constructor(public migraineStatus: MigraineStatusService) {
  }

  async ionViewDidEnter(){
    const status = await this.migraineStatus.getObject();
  }

}
