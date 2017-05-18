import {bootstrap,Component,FORM_DIRECTIVES,NgClass,NgFor,NgIf} from 'angular2/angular2';

@Component({
    selector: 'my-video',
    template: `
<div >
  <h1> ANLLELA SAGRA - WORKOUT MOTIVATION </h1>
  <div class="vidplay" >
    
    <video class="vid" id="mp" poster="./video/ANLLELA-SAGRA-WORKOUT-MOTIVATION-thumbnail.png" (loadedmetadata)="processMetaData(movieplayer)"  #movieplayer (timeupdate)="updateDisplayTime(movieplayer)" (mouseenter)= "hideControl(false)" (mouseout)= "hideControl(true)" >
      <source src="./video/ANLLELA-SAGRA-WORKOUT-MOTIVATION.mp4"/>
    </video>

    <div class="vdctrl" [hidden]="hidectrl" (mouseenter)= "hideControl(false)" (mouseout)= "hideControl(true)" >
      <input [hidden]="!movieLoaded" class="slider" type="range" min="0" style="width:99%;" max="{{movieplayer.duration}}" id="myRange" [(ng-model)]="currentTimeRange" (input)="seek($event,movieplayer)">
      <div></div>
      <button (click)="onPlayPause(movieplayer)"><img style="width:16px;" src={{playpauseimg}}></button>
      <button  (click)=" onMuteUnmute(movieplayer)"><img style="width:16px;" src={{volumeMuteImg}}></button>
      <input #volumerange class="volslider" style="width:100px" type="range" min="1" max="10"   [(ng-model)]="volume" (input)="seekVolume($event,movieplayer)">
      <span style="color:white">{{currTime}} / {{videoDuration}}</span>
      <button (click)="makeFullScreen(movieplayer)" style="float:right;"><img style="width:16px;" src="./fullscreen.svg"></button>
    </div>
    
    <div class="popupno1" [hidden]="popup1">
      <a href="https://www.youtube.com/watch?v=PCZ2JHaPvZ4&t=2s"> Original Video !!! </a>
    </div>

    <div class="popupno2" [hidden]="popup2">
      <img class="smile" src="smile.png" alt="Smiley face" height="60" width="60" >
    </div>
   
  </div>
  <div class="popupno3" [hidden]="popup3">
    <div id="watch-description-content">
      <div id="watch-description-clip">
        <div id="watch-uploader-info">
            <strong class="watch-time-text">Published on Jun 30, 2016</strong>
        </div>
        <div id="watch-description-text" class="">
          <p id="eow-description" class="">
            ➢ Hire Me As Your Online Personal Trainer: 
            <a href="http://Anllelasagra.net" class="yt-uix-servicelink  " data-url="http://Anllelasagra.net" data-servicelink="CDEQ6TgYACITCIfi8Li5-tMCFcGUWAodXaEHIij4HQ" data-target-new-window="True" rel="nofollow noopener" target="_blank">
              http://Anllelasagra.net
            </a>
            <br>➢ 1Up Discount code (SAGRA) 
            <a href="http://www.1upnutrition.com" class="yt-uix-servicelink  " data-url="http://www.1upnutrition.com" data-servicelink="CDEQ6TgYACITCIfi8Li5-tMCFcGUWAodXaEHIij4HQ" data-target-new-window="True" rel="nofollow noopener" target="_blank">
              http://www.1upnutrition.com
            </a>
            <br>➢ Instagram: 
            <a href="http://instagram.com/Anllela_sagra" class="yt-uix-servicelink  " data-url="http://instagram.com/Anllela_sagra" data-servicelink="CDEQ6TgYACITCIfi8Li5-tMCFcGUWAodXaEHIij4HQ" data-target-new-window="True" rel="nofollow noopener" target="_blank">
              http://instagram.com/Anllela_sagra
            </a>
            <br>➢ Facebook: 
            <a href="https://www.facebook.com/Anllela-Sagra-466521906818912/" class="yt-uix-servicelink  " data-url="https://www.facebook.com/Anllela-Sagra-466521906818912/" data-servicelink="CDEQ6TgYACITCIfi8Li5-tMCFcGUWAodXaEHIij4HQ" data-target-new-window="True" rel="nofollow noopener" target="_blank">
              https://www.facebook.com/Anllela-Sagr...
            </a>
          </p>
        </div>  
        <div id="watch-description-extras">
          <ul class="watch-extras-section">
            <li class="watch-meta-item yt-uix-expander-body">
              <h4 class="title">Category</h4>
              <ul class="content watch-info-tag-list"><li><a href="/channel/UCEgdi0XIXXZ-qJOFPf4JSKw" class="g-hovercard yt-uix-sessionlink      spf-link " data-ytid="UCEgdi0XIXXZ-qJOFPf4JSKw" data-sessionlink="ei=cxoeWcfcG8Gp4gLdwp6QAg">Sports</a></li></ul>
            </li>
            <li class="watch-meta-item yt-uix-expander-body">
              <h4 class="title">License</h4>
              <ul class="content watch-info-tag-list"><li>Standard YouTube License</li></ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div> 
</div>
`,
    styles: [` 

h1 {
  color:#369;
  text-align: center;
}
.vidplay {
  display:block;
  background-color:#000000;
  height:480px;
  overflow:hidden;
  z-index:-1;
}
.vid {
  display: block;
  width: 70%;
  margin:0 auto;
}
.vdctrl {
  position: relative;
  width: 70%;
  top: -50px;
  margin: 0 auto;
  z-index:1;
}
.popupno1 {
  position:absolute;
  top:100px;
  left:200px;
  z-index:1;
  font-family: Arial, Helvetica, sans-serif;
  font-size:30px;
  font-weight:bold;
  background-color:#ff0000;
}
.popupno2 {
  position:absolute;
  top:100px;
  left:800px;
  z-index:1;
  background-color:#0066ff;
}
.popupno3 {
  position:relative;
  z-index:1;
  font-family: Arial, Helvetica, sans-serif;
}


@media screen and (-webkit-min-device-pixel-ratio:0) { 

input[type=range].slider {
  -webkit-appearance: none;
  margin-bottom:10px;
  width: 100%;
  
}
}
    
input[type=range].slider:focus {
  outline: none;
}
input[type=range].slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 1.6px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3b4d4d;
  border-radius: 18.1px;
  border: 0px solid #010101;
}
input[type=range].slider::-webkit-slider-thumb {
  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;
  border: 0px solid #ff1e00;
  height: 16px;
  width: 10px;
  border-radius: 0px;
  background: rgba(255, 199, 95, 0.93);
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7.2px;
}
input[type=range].slider:focus::-webkit-slider-runnable-track {
  background: #4f6767;
}
input[type=range].slider::-moz-range-track {
  width: 100%;
  height: 1.6px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3b4d4d;
  border-radius: 18.1px;
  border: 0px solid #010101;
}
input[type=range].slider::-moz-range-thumb {
  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;
  border: 0px solid #ff1e00;
  height: 16px;
  width: 10px;
  border-radius: 0px;
  background: rgba(255, 199, 95, 0.93);
  cursor: pointer;
}
input[type=range].slider::-ms-track {
  width: 100%;
  height: 1.6px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range].slider::-ms-fill-lower {
  background: #273333;
  border: 0px solid #010101;
  border-radius: 36.2px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range].slider::-ms-fill-upper {
  background: #3b4d4d;
  border: 0px solid #010101;
  border-radius: 36.2px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range].slider::-ms-thumb {
  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;
  border: 0px solid #ff1e00;
  height: 16px;
  width: 10px;
  border-radius: 0px;
  background: rgba(255, 199, 95, 0.93);
  cursor: pointer;
  height: 1.6px;
}
input[type=range].slider:focus::-ms-fill-lower {
  background: #3b4d4d;
}
input[type=range].slider:focus::-ms-fill-upper {
  background: #4f6767;
}

input[type=range].volslider {
  -webkit-appearance: none;
  width: 100%;
  margin: 7.2px 0;
}
input[type=range].volslider:focus {
  outline: none;
}
input[type=range].volslider::-webkit-slider-runnable-track {
  width: 100%;
  height: 1.6px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3b4d4d;
  border-radius: 18.1px;
  border: 0px solid #010101;
}
input[type=range].volslider::-webkit-slider-thumb {
  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;
  border: 0px solid #ff1e00;
  height: 16px;
  width: 17px;
  border-radius: 50px;
  background: #ff0000;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7.2px;
}
input[type=range].volslider:focus::-webkit-slider-runnable-track {
  background: #4f6767;
}
input[type=range].volslider::-moz-range-track {
  width: 100%;
  height: 1.6px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3b4d4d;
  border-radius: 18.1px;
  border: 0px solid #010101;
}
input[type=range].volslider::-moz-range-thumb {
  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;
  border: 0px solid #ff1e00;
  height: 16px;
  width: 17px;
  border-radius: 50px;
  background: #ff0000;
  cursor: pointer;
}
input[type=range].volslider::-ms-track {
  width: 100%;
  height: 1.6px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range].volslider::-ms-fill-lower {
  background: #273333;
  border: 0px solid #010101;
  border-radius: 36.2px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range].volslider::-ms-fill-upper {
  background: #3b4d4d;
  border: 0px solid #010101;
  border-radius: 36.2px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range].volslider::-ms-thumb {
  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;
  border: 0px solid #ff1e00;
  height: 16px;
  width: 17px;
  border-radius: 50px;
  background: #ff0000;
  cursor: pointer;
  height: 1.6px;
}
input[type=range].volslider:focus::-ms-fill-lower {
  background: #3b4d4d;
}
input[type=range].volslider:focus::-ms-fill-upper {
  background: #4f6767;
}




`],
    directives: [FORM_DIRECTIVES, NgClass, NgFor, NgIf]
})

class AppComponent {

    
    public videoStatus:number = 1;
    public playpauseimg = "./play.svg";
    public volumeMuteImg="./volume.svg";
    public currentTimeRange:number = 0;
    public movieLoaded:boolean=false;
    public videoDuration="00:00";
    public currTime:string = "";
    public volume: number = 5;
    public hidectrl: boolean = true;
    public popup1: boolean =true;
    public popup1done: boolean =false;
    public popup2: boolean =true;
    public popup2done: boolean =false;
    public popup3: boolean =true;
    public popup3done: boolean =false;

    getBrowser() {
        if (navigator.userAgent.indexOf("Chrome") != -1) {
            return "Webkit";
        } else if (navigator.userAgent.indexOf("Opera") != -1) {
            return "Opera";
        } else if (navigator.userAgent.indexOf("MSIE") != -1) {
            return "IE";
        } else if (navigator.userAgent.indexOf("Firefox") != -1) {
            return "Firefox";
         
        } else if(navigator.userAgent.indexOf("Safari") != -1) {
            return "Webkit";
        } 
        else {
            return "unknown";
        }
    }
    secondsToMinutesAndSeconds(time) {
        var minutes = Math.floor(time / 60);
        var seconds = Math.round(time % 60);

        return "" + minutes + ":" + seconds;
    }
    makeFullScreen(mp){
        if (this.getBrowser()==="Webkit"){
              mp.webkitEnterFullScreen();
        }
        else if (this.getBrowser() === "Firefox"){
            mp.mozRequestFullScreen();
        }
        else{
            return "unknown";
        }
    }
    hideControl(show){
        
        this.hidectrl = show;
    }
    checkpopup1(moviePlayer){
      if ((this.currTime == "0:5") && (this.popup1done == false)) {
          moviePlayer.pause();
          this.playpauseimg = "./play.svg";
          this.popup1 = false;
          this.popup1done = true;
      }
      if ((this.currTime == "0:15") && (this.popup1done == true)) {
          this.popup1 = true;
          this.popup1done = false;
      }
    }
    checkpopup2(moviePlayer){
      if ((this.currTime == "0:10") && (this.popup2done == false)) {
          this.popup2 = false;
          this.popup2done = true;
      }
      if ((this.currTime == "0:15") && (this.popup2done == true)) {
          this.popup2 = true;
          this.popup2done = false;
      }
    }
    checkpopup3(moviePlayer){
      if ((this.currTime == "0:20") && (this.popup3done == false)) {
          this.popup3 = false;
          this.popup3done = true;
      }
      if ((this.currTime == "3:0") && (this.popup3done == true)) {
          this.popup3 = true;
          this.popup3done = false;
      }
    }
    updateDisplayTime(moviePlayer) {
        this.currTime = this.secondsToMinutesAndSeconds(moviePlayer.currentTime);
        this.currentTimeRange = moviePlayer.currentTime;
        this.checkpopup1(moviePlayer);
        this.checkpopup2(moviePlayer);
        this.checkpopup3(moviePlayer);
    }
    onMuteUnmute(moviePlayer){
        if(moviePlayer.muted){

            moviePlayer.muted=false;
            this.volumeMuteImg="./volume.svg"
        }
        else{
            moviePlayer.muted=true;
            this.volumeMuteImg="./mute.svg"
        }

    }
    seek(evt, moviePlayer) {

        moviePlayer.pause();
        moviePlayer.currentTime = evt.target.value;
        this.currTime = this.secondsToMinutesAndSeconds(moviePlayer.currentTime);
        this.currentTimeRange = moviePlayer.currentTime;
        moviePlayer.play();
        this.playpauseimg = "./pause.svg";

    }
    seekVolume(event,moviePlayer){
         var volumeToBeSet=event.target.value;
         moviePlayer.volume=volumeToBeSet/10;

     }
    processMetaData(moviePlayer){
        var self = this;
        this.movieLoaded=true;
        moviePlayer.volume = 0.5;
        this.videoDuration=this.secondsToMinutesAndSeconds(moviePlayer.duration);
    }
    onPlayPause(moviePlayer) {
        
        if (moviePlayer.paused) {
            moviePlayer.play();
            this.playpauseimg = "./pause.svg";
        }
        else {
            moviePlayer.pause();
            this.playpauseimg = "./play.svg";

        }
    }
}

bootstrap(AppComponent);
