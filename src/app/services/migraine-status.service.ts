import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class MigraineStatusService {
  constructor() {}

  async setObject(value: boolean) {
    await Preferences.set({
      key: 'migraineStatus',
      value: JSON.stringify(value),
    });
  }

  async getObject(): Promise<boolean> {
    const status = await Preferences.get({ key: 'migraineStatus' });
    const result : string = status.value!;
    const statusValue = JSON.parse(result);
    return Promise.resolve(statusValue);
  }

  public init() {
    console.log('settting values');
    this.setObject(false);
  }
}
