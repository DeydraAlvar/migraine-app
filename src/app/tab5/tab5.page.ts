import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { IonContent, IonicModule, Platform } from "@ionic/angular";

@Component({
  selector: "app-tab5",
  templateUrl: "tab5.page.html",
  styleUrls: ["tab5.page.scss"],
  standalone: true,
  imports: [IonicModule],
  providers: [],
})
export class Tab5Page {

  @ViewChild("animation") image: ElementRef;
  @ViewChild(IonContent) content: IonContent;
  @ViewChild("pin1") pin1: ElementRef;
  @ViewChild("pin2") pin2: ElementRef;
  @ViewChild("pin3") pin3: ElementRef;
  @ViewChild("pin4") pin4: ElementRef;
  @ViewChild("pin5") pin5: ElementRef;
  @ViewChild("pin6") pin6: ElementRef;
  @ViewChild("pin7") pin7: ElementRef;
  @ViewChild("pin8") pin8: ElementRef;
  @ViewChild("pin9") pin9: ElementRef;
  @ViewChild("pin10") pin10: ElementRef;
  @ViewChild("pin11") pin11: ElementRef;
  @ViewChild("pin12") pin12: ElementRef;


  public timeintervalID: any;
  public recordingSeconds = 0;
  constructor(public render: Renderer2) {}

  ionViewWillEnter() {
    this.render.addClass(this.image.nativeElement, "world-map");
    this.recordingSeconds = 0;
  }
  ionViewDidEnter() {
    this.timeintervalID = setInterval(this.incrementSeconds.bind(this), 500);
    this.render.addClass(this.image.nativeElement, "zoomIn");
    setTimeout(() => {
      // this.render.removeClass(this.image.nativeElement, "zoomIn");
      this.render.addClass(this.image.nativeElement, "city-map");
      this.content.scrollToPoint(300,850);

    }, 2300);

  }

  ionViewWillLeave() {
    this.render.removeClass(this.image.nativeElement, "city-map");
    this.render.addClass(this.pin11.nativeElement, "activated-pin");
    this.removeViewClasses();
    this.removeAnimatedClasses();
    clearInterval(this.timeintervalID);
    this.content.scrollToPoint(0,0);


  }


  public async incrementSeconds() {
    this.recordingSeconds += 0.5;

    if(this.recordingSeconds === 2){
      this.render.addClass(this.pin11.nativeElement, "animate-pin");
      this.render.addClass(this.pin11.nativeElement, "activated-pin");

    }

    if(this.recordingSeconds === 2.5){
      this.render.addClass(this.pin9.nativeElement, "animate-pin");
      this.render.addClass(this.pin9.nativeElement, "activated-pin");

    }

    if(this.recordingSeconds === 3){
      this.render.addClass(this.pin1.nativeElement, "animate-pin");
      this.render.addClass(this.pin1.nativeElement, "activated-pin");
      this.render.addClass(this.pin1.nativeElement, "move-pin-animation-1");


    }

    if(this.recordingSeconds === 4){
      this.render.addClass(this.pin4.nativeElement, "animate-pin");
      this.render.addClass(this.pin4.nativeElement, "activated-pin");
      this.render.addClass(this.pin4.nativeElement, "move-pin-animation-4");


      this.render.addClass(this.pin7.nativeElement, "animate-pin");
      this.render.addClass(this.pin7.nativeElement, "activated-pin");



    }
    if(this.recordingSeconds === 4.5){
      this.render.addClass(this.pin6.nativeElement, "animate-pin");
      this.render.addClass(this.pin6.nativeElement, "activated-pin");
      this.render.addClass(this.pin6.nativeElement, "move-pin-animation-5");

      this.render.addClass(this.pin10.nativeElement, "animate-pin");
      this.render.addClass(this.pin10.nativeElement, "activated-pin");



    }
    if(this.recordingSeconds === 5){
      this.render.addClass(this.pin2.nativeElement, "animate-pin");
      this.render.addClass(this.pin2.nativeElement, "activated-pin");
      this.render.addClass(this.pin2.nativeElement, "move-pin-animation-2");


      this.render.addClass(this.pin8.nativeElement, "animate-pin");
      this.render.addClass(this.pin8.nativeElement, "activated-pin");



    }
    if(this.recordingSeconds === 5.5){
      this.render.addClass(this.pin3.nativeElement, "animate-pin");
      this.render.addClass(this.pin3.nativeElement, "activated-pin");
      this.render.addClass(this.pin3.nativeElement, "move-pin-animation-3");


    }

    if(this.recordingSeconds === 6){
      this.render.addClass(this.pin5.nativeElement, "animate-pin");
      this.render.addClass(this.pin5.nativeElement, "activated-pin");
      this.render.addClass(this.pin5.nativeElement, "move-pin-animation-6");


    }

    if(this.recordingSeconds === 7){
      this.render.addClass(this.pin12.nativeElement, "animate-pin");
      this.render.addClass(this.pin12.nativeElement, "activated-pin");


    }
    
    if (this.recordingSeconds >= 8) {
      this.removeAnimatedClasses();





      clearInterval(this.timeintervalID);
    }
  }

  public clickPin(event: any){
    console.log(event)
    this.render.addClass(document.getElementById(event.target.id), "click-pin-animation");
    setTimeout(() => {
      this.render.removeClass(document.getElementById(event.target.id), "click-pin-animation");
    }, 500);
  }

  public removeAnimatedClasses(){
    this.render.removeClass(this.pin1.nativeElement, "animate-pin");
    this.render.removeClass(this.pin2.nativeElement, "animate-pin");
    this.render.removeClass(this.pin3.nativeElement, "animate-pin");
    this.render.removeClass(this.pin4.nativeElement, "animate-pin");
    this.render.removeClass(this.pin5.nativeElement, "animate-pin");
    this.render.removeClass(this.pin6.nativeElement, "animate-pin");
    this.render.removeClass(this.pin7.nativeElement, "animate-pin");
    this.render.removeClass(this.pin8.nativeElement, "animate-pin");
    this.render.removeClass(this.pin9.nativeElement, "animate-pin");
    this.render.removeClass(this.pin10.nativeElement, "animate-pin");
    this.render.removeClass(this.pin11.nativeElement, "animate-pin");
    this.render.removeClass(this.pin12.nativeElement, "animate-pin");


  }


  public removeViewClasses(){
    this.render.removeClass(this.pin1.nativeElement, "activated-pin");
    this.render.removeClass(this.pin2.nativeElement, "activated-pin");
    this.render.removeClass(this.pin3.nativeElement, "activated-pin");
    this.render.removeClass(this.pin4.nativeElement, "activated-pin");
    this.render.removeClass(this.pin5.nativeElement, "activated-pin");
    this.render.removeClass(this.pin6.nativeElement, "activated-pin");
    this.render.removeClass(this.pin7.nativeElement, "activated-pin");
    this.render.removeClass(this.pin8.nativeElement, "activated-pin");
    this.render.removeClass(this.pin9.nativeElement, "activated-pin");
    this.render.removeClass(this.pin10.nativeElement, "activated-pin");
    this.render.removeClass(this.pin11.nativeElement, "activated-pin");
    this.render.removeClass(this.pin12.nativeElement, "activated-pin");


  }

}
