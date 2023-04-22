import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { MigraineStatusService } from "../services/migraine-status.service";
@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab2Page {
  public migraineS: boolean;
  public currentApplets: any;
  public applets = [
    {
      section: "Family Applets",
      applets: [
        {
          icon: "../../assets/images/phone.svg",
          name: "Notify my contacts",
          description: "Let your family and friends know",
          activated: true,
        },
        {
          icon: "../../assets/images/food.svg",
          name: "Order a meal",
          description: "Deliver groceries or family dinner",
          activated: false,
        },
        {
          icon: "../../assets/images/babysitter.svg",
          name: "Request babysitter",
          description: "Call in your care contact",
          activated: false,
        },
        {
          icon: "../../assets/images/plus-icon.svg",
          name: "Add more applets",
          description: "",
          activated: false,
        },
      ],
    },

    {
      section: "Work Applets",
      applets: [
        {
          icon: "../../assets/images/sick.svg",
          name: "Take sick time",
          description: "Have pre-written message sent",
          activated: false,
        },
        {
          icon: "../../assets/images/block.svg",
          name: "Go away",
          description: 'Set status to "Away" or  "OOO" ',
          activated: true,
        },
        {
          icon: "../../assets/images/plus-icon.svg",
          name: "Add more applets",
          description: "",
          activated: false,
        },
      ],
    },
    {
      section: "Me Applets",
      applets: [
        {
          icon: "../../assets/images/bulb.svg",
          name: "Dim the lights",
          description: "Turn on smart lights automation",
          activated: false,
        },
        {
          icon: "../../assets/images/go-green.svg",
          name: "Go green",
          description: "Greenlight filter for your device",
          activated: true,
        },
        {
          icon: "../../assets/images/music.svg",
          name: "Play music",
          description: "Play something soothing",
          activated: true,
        },
        {
          icon: "../../assets/images/plus-icon.svg",
          name: "Add more applets",
          description: "",
          activated: false,
        },
      ],
    },
  ];

  constructor(public migraineStatus: MigraineStatusService) {
    this.currentApplets = this.applets[0];
  }

  async ionViewWillEnter() {
    this.migraineS = await this.migraineStatus.getObject();
  }

  public changeApplets(value: number) {
    this.currentApplets = this.applets[value];
  }

  public getCardClass(value: number) {
    if (this.currentApplets.applets[value].activated && this.migraineS) {
      return "applet-card-selected-green";
    }
    if (this.currentApplets.applets[value].activated && !this.migraineS) {
      return "applet-card-selected-purple";
    }
    return "";
  }

  public changeStatus(value: number) {
    if (this.currentApplets.applets[value].description) {
      this.currentApplets.applets[value].activated =
        !this.currentApplets.applets[value].activated;
    }
  }
}
