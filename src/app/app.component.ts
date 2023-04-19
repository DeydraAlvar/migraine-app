import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MigraineStatusService } from './services/migraine-status.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  providers:[MigraineStatusService]
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private migraineStatus: MigraineStatusService) {
    this.migraineStatus.init();
  }
}
