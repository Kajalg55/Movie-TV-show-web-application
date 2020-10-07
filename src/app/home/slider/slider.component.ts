import { Component } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent {
  localVal:any;
  constructor(){
     this.localVal= localStorage.getItem("currentUserSubject");
     this.localVal= JSON.parse(this.localVal);
    //console.log("view local storage data is",this.localVal["email"]);

  }

}
