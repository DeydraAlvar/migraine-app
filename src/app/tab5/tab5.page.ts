import { CommonModule } from "@angular/common";
import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { IonContent, IonicModule, Platform } from "@ionic/angular";
import { ChangeDetectorRef } from "@angular/core";
@Component({
  selector: "app-tab5",
  templateUrl: "tab5.page.html",
  styleUrls: ["tab5.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule],
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
  @ViewChild("pin11") pin11: ElementRef;


  public timeintervalID: any;
  public recordingSeconds = 0;
  public triggers =[

    {
      closed: '../../assets/images/allergens-pin.svg',
      opened: '../../assets/images/allergens-expanded.svg',
      class:'custom-pin-1',
      id: 'pin7',
      showInfo : false
    },
    {
      closed: '../../assets/images/noise-pin.svg',
      opened: '../../assets/images/noise-expanded.svg',
      class:'custom-pin-2',
      id: 'pin8',
      showInfo : false
    },
    {
      closed: '../../assets/images/smoke-pin.svg',
      opened: '../../assets/images/smoke-expanded.svg',
      class:'custom-pin-3',
      id: 'pin9',
      showInfo : false
    },
    {
      closed: '../../assets/images/traffic-pin.svg',
      opened: '../../assets/images/traffic-expanded.svg',
      class:'custom-pin-4',
      id: 'pin10',
      showInfo : false
    },
    {
      closed: '../../assets/images/asphalt-pin.svg',
      opened: '../../assets/images/asphalt-expanded.svg',
      class:'trigger-pin',
      id: 'pin12',
      showInfo : false
    },
    
  ]

  constructor(public render: Renderer2, public cd : ChangeDetectorRef) {}

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
      this.render.addClass(document.getElementById('pin9'), "animate-pin");
      this.render.addClass(document.getElementById('pin9'), "activated-pin");

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


      this.render.addClass(document.getElementById('pin7'), "animate-pin");
      this.render.addClass(document.getElementById('pin7'), "activated-pin");



    }
    if(this.recordingSeconds === 4.5){
      this.render.addClass(this.pin6.nativeElement, "animate-pin");
      this.render.addClass(this.pin6.nativeElement, "activated-pin");
      this.render.addClass(this.pin6.nativeElement, "move-pin-animation-5");

      this.render.addClass(document.getElementById('pin10'), "animate-pin");
      this.render.addClass(document.getElementById('pin10'), "activated-pin");



    }
    if(this.recordingSeconds === 5){
      this.render.addClass(this.pin2.nativeElement, "animate-pin");
      this.render.addClass(this.pin2.nativeElement, "activated-pin");
      this.render.addClass(this.pin2.nativeElement, "move-pin-animation-2");


      this.render.addClass(document.getElementById('pin8'), "animate-pin");
      this.render.addClass(document.getElementById('pin8'), "activated-pin");



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
      this.render.addClass(document.getElementById('pin12'), "animate-pin");
      this.render.addClass(document.getElementById('pin12'), "activated-pin");


    }
    
    if (this.recordingSeconds >= 8) {
      this.removeAnimatedClasses();





      clearInterval(this.timeintervalID);
    }
  }

  public clickPin(event: any){
    const triggerIndex = this.triggers.findIndex(trigger => trigger.id ===event.target.id);
    this.triggers[triggerIndex].showInfo =  !this.triggers[triggerIndex].showInfo;
    this.cd.detectChanges();
    this.render.addClass(document.getElementById(event.target.id), "click-pin-animation");
    this.render.addClass(document.getElementById(event.target.id), "activated-pin");

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
    this.render.removeClass(document.getElementById('pin7'), "animate-pin");
    this.render.removeClass(document.getElementById('pin8'), "animate-pin");
    this.render.removeClass(document.getElementById('pin9'), "animate-pin");
    this.render.removeClass(document.getElementById('pin10'), "animate-pin");
    this.render.removeClass(this.pin11.nativeElement, "animate-pin");
    this.render.removeClass(document.getElementById('pin12'), "animate-pin");


  }


  public removeViewClasses(){
    this.render.removeClass(this.pin1.nativeElement, "activated-pin");
    this.render.removeClass(this.pin2.nativeElement, "activated-pin");
    this.render.removeClass(this.pin3.nativeElement, "activated-pin");
    this.render.removeClass(this.pin4.nativeElement, "activated-pin");
    this.render.removeClass(this.pin5.nativeElement, "activated-pin");
    this.render.removeClass(this.pin6.nativeElement, "activated-pin");
    this.render.removeClass(document.getElementById('pin7'), "activated-pin");
    this.render.removeClass(document.getElementById('pin8'), "activated-pin");
    this.render.removeClass(document.getElementById('pin9'), "activated-pin");
    this.render.removeClass(document.getElementById('pin10'), "activated-pin");
    this.render.removeClass(this.pin11.nativeElement, "activated-pin");
    this.render.removeClass(document.getElementById('pin12'), "activated-pin");


  }

}
