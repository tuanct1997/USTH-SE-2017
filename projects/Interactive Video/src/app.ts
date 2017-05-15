import {bootstrap, Component,FORM_DIRECTIVES,NgClass,NgFor,NgIf} from 'angular2/angular2';
@Component({
    selector: 'my-video',
    template: `
<div>
  <h1> ANLLELA SAGRA - WORKOUT MOTIVATION </h1>
  <video class="vid" id="mp" poster="./video/ANLLELA-SAGRA-WORKOUT-MOTIVATION-thumbnail.png" (loadedmetadata)="processMetaData(movieplayer)"  #movieplayer (timeupdate)="updateDisplayTime(movieplayer)" (mouseenter)= "hideControl(false)" (mouseout)= "hideControl(true)" >
    <source src="./video/ANLLELA-SAGRA-WORKOUT-MOTIVATION.mp4"/>
  </video>


  <div class="vdctrl" [hidden]="hidectrl"  (mouseenter)= "hideControl(false)" (mouseout)= "hideControl(true)" >
    <input [hidden]="!movieLoaded" class="slider" type="range" min="0" style="width:99%;height:2px;" max="{{movieplayer.duration}}" id="myRange" [(ng-model)]="currentTimeRange" (input)="seek($event,movieplayer)">
    <div></div>
    <button (click)="onPlayPause(movieplayer)"><img style="width:16px;" src={{playpauseimg}}></button>
    <button  (click)=" onMuteUnmute(movieplayer)"><img style="width:16px;" src={{volumeMuteImg}}></button>
    
    <input #volumerange class="volslider" style="width:80px" type="range" min="1" max="10"   [(ng-model)]="volume" (input)="seekVolume($event,movieplayer)">
    <span style="color:white">{{currTime}} / {{videoDuration}}</span>

    <button (click)="makeFullScreen(movieplayer)" style="align-items:right;"><img style="width:16px;" src="./fullscreen.svg"></button>
  </div>
</div>
`,
    styles: [` 
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
    public hidectrl: boolean =true;

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
    updateDisplayTime(moviePlayer) {
        this.currTime = this.secondsToMinutesAndSeconds(moviePlayer.currentTime);
        this.currentTimeRange = moviePlayer.currentTime;
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
