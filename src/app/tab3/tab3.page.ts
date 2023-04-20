import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { IonicModule, Platform } from "@ionic/angular";
import { SpeechRecognition } from "@capacitor-community/speech-recognition";
import { NavController } from "@ionic/angular";
import { MigraineStatusService } from "../services/migraine-status.service";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule],
  providers: [MigraineStatusService],
})
export class Tab3Page {
  @ViewChild("animation") image: ElementRef;
  @ViewChild("content") content: ElementRef;
  public isRecording = false;
  public recordingSeconds = 0;
  public timeintervalID: any;
  public migraineS = false;
  constructor(
    public render: Renderer2,
    public nav: NavController,
    public migraineStatus: MigraineStatusService,
    public changeDetector: ChangeDetectorRef
  ) {}

  async ionViewWillEnter() {
    this.migraineS = await this.migraineStatus.getObject();
  }

  public applyAnimation() {
    this.render.addClass(this.image.nativeElement, "bounce");
  }

  public removeAnimation() {
    this.render.removeClass(this.image.nativeElement, "bounce");
  }

  async startRecording() {
    if (this.isRecording) {
      return;
    }
    const hasPermission = await SpeechRecognition.hasPermission();
    if (hasPermission.permission) {
      if (!(await SpeechRecognition.available())) {
        this.nav.navigateRoot("/tabs/tab1");
      }
      await SpeechRecognition.start({
        language: "en-US",
        maxResults: 2,
        prompt: "Say something",
        partialResults: true,
        popup: true,
      });
      this.isRecording = true;
      this.applyAnimation();
      // listen to partial results
      this.timeintervalID = setInterval(this.incrementSeconds.bind(this), 1000);
      await SpeechRecognition.addListener(
        "partialResults",
        (data: { matches: string[] }) => {
          if (
            data.matches[0]
              .split(" ")
              .find((word) => word.toLowerCase() === "have") &&
            data.matches[0]
              .split(" ")
              .find((word) => word.toLowerCase() === "migraine")
          ) {
            this.stopRecording();
            this.removeAnimation();
            this.migraineDetected();
            clearInterval(this.timeintervalID);
            this.migraineS = true;
            this.changeDetector.detectChanges();
          }
        }
      );
    } else {
      SpeechRecognition.requestPermission()
        .then(() => {
          this.startRecording();
        })
        .catch((error) => {
          alert(error.errorMessage);
        });

      if (!(await SpeechRecognition.available())) {
        this.nav.navigateRoot("/tabs/tab1");
      }
    }
  }

  public async incrementSeconds() {
    this.recordingSeconds += 1;
    if (this.recordingSeconds >= 10 && this.isRecording) {
      await this.stopRecording();
      this.removeAnimation();
      clearInterval(this.timeintervalID);
      alert("No migraine command detected");
    }
  }

  async stopRecording() {
    this.recordingSeconds = 0;
    this.isRecording = false;
    await SpeechRecognition.removeAllListeners();
    await SpeechRecognition.stop();
  }

  public migraineDetected() {
    this.migraineStatus.setObject(true);
  }


  public showMigraineActiveAlert(){
    alert("Migraine Mode is ON");
  }
}
