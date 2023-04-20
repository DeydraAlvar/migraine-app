import { Component } from '@angular/core';
import { IonicModule, Platform, } from '@ionic/angular';
import { MigraineStatusService } from '../services/migraine-status.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  providers: [MigraineStatusService],
})
export class Tab1Page {
  public migraineS = false;

  constructor(public migraineStatus: MigraineStatusService, public cd : ChangeDetectorRef) {
  }

  async ionViewWillEnter(){
    this.migraineS = await this.migraineStatus.getObject();
  }


  public exitMigraineMode(){
    this.migraineStatus.setObject(false);
    this.migraineS = false;
    this.cd.detectChanges();
  }
}
