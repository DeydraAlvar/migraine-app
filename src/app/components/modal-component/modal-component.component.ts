import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
import { MigraineStatusService } from "src/app/services/migraine-status.service";
@Component({
  selector: "app-modal-component",
  templateUrl: "./modal-component.component.html",
  styleUrls: ["./modal-component.component.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule],
  providers: [PopoverController],
})
export class ModalComponentComponent implements OnInit {


  constructor(private popover: PopoverController, private migraineStatus: MigraineStatusService) {}

  ngOnInit() {}

  public dismiss() {
    this.popover.dismiss();
  }
   
  public turnOffMigraine(){
    this.migraineStatus.setObject(false);
    this.popover.dismiss();
  }
}
