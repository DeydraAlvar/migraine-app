import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, Platform } from '@ionic/angular';
import { MigraineStatusService } from '../services/migraine-status.service';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  providers: [],
})
export class Tab4Page {
  public migraineS: boolean;
  constructor(public migraineStatus: MigraineStatusService) {
  }
  
  async ionViewWillEnter() {
    this.migraineS = await this.migraineStatus.getObject();
  }

}
