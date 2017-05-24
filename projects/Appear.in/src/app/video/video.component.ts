import { Component, OnInit } from '@angular/core';
import {ViewChild, ViewChildren,  QueryList, ElementRef} from '@angular/core'
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() { }
   @ViewChild('myname') input:ElementRef; 
  @ViewChild('video') video:ElementRef;
  
  @ViewChildren('div1,div2,div3') divs:QueryList<ElementRef>;

  ngOnInit(){
  };

   public on(){
     let _video=this.video.nativeElement;
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
                            .then(stream => {
                              _video.src = window.URL.createObjectURL(stream);
                              _video.play();
                            })
    }
  }
  
    
}
