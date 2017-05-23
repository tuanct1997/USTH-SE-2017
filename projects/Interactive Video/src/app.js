"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular2_1 = require("angular2/angular2");
var AppComponent = (function () {
    function AppComponent() {
        this.videoStatus = 1;
        this.playpauseimg = "./play.svg";
        this.volumeMuteImg = "./volume.svg";
        this.currentTimeRange = 0;
        this.movieLoaded = false;
        this.videoDuration = "00:00";
        this.currTime = "";
        this.volume = 5;
        this.hidectrl = true;
        this.popup1 = true;
        this.popup1done = false;
        this.popup2 = true;
        this.popup2done = false;
        this.popup3 = true;
        this.popup3done = false;
        this.popup4 = true;
        this.popup4done = false;
        this.popup5 = true;
        this.popup5done = false;
    }
    AppComponent.prototype.getBrowser = function () {
        if (navigator.userAgent.indexOf("Chrome") != -1) {
            return "Webkit";
        }
        else if (navigator.userAgent.indexOf("Opera") != -1) {
            return "Opera";
        }
        else if (navigator.userAgent.indexOf("MSIE") != -1) {
            return "IE";
        }
        else if (navigator.userAgent.indexOf("Firefox") != -1) {
            return "Firefox";
        }
        else if (navigator.userAgent.indexOf("Safari") != -1) {
            return "Webkit";
        }
        else {
            return "unknown";
        }
    };
    AppComponent.prototype.secondsToMinutesAndSeconds = function (time) {
        var minutes = Math.floor(time / 60);
        var seconds = Math.round(time % 60);
        return "" + minutes + ":" + seconds;
    };
    AppComponent.prototype.makeFullScreen = function (mp) {
        if (this.getBrowser() === "Webkit") {
            mp.webkitEnterFullScreen();
        }
        else if (this.getBrowser() === "Firefox") {
            mp.mozRequestFullScreen();
        }
        else {
            return "unknown";
        }
    };
    AppComponent.prototype.hideControl = function (show) {
        this.hidectrl = show;
    };
    AppComponent.prototype.checkpopup1 = function (moviePlayer) {
        if ((this.currTime == "0:5") && (this.popup1done == false)) {
            moviePlayer.pause();
            this.playpauseimg = "./play.svg";
            this.popup1 = false;
            this.popup1done = true;
        }
        if ((!moviePlayer.paused) && (this.popup1done == true)) {
            this.popup1 = true;
        }
    };
    AppComponent.prototype.checkpopup2 = function (moviePlayer) {
        if ((this.currTime == "0:10") && (this.popup2done == false)) {
            this.popup2 = false;
            this.popup2done = true;
        }
        if ((this.currTime == "0:15") && (this.popup2done == true)) {
            this.popup2 = true;
            this.popup2done = false;
        }
    };
    AppComponent.prototype.checkpopup3 = function (moviePlayer) {
        if ((this.currTime == "0:20") && (this.popup3done == false)) {
            this.popup3 = false;
            this.popup3done = true;
        }
        if ((this.currTime == "3:0") && (this.popup3done == true)) {
            this.popup3 = true;
            this.popup3done = false;
        }
    };
    AppComponent.prototype.checkpopup4 = function (moviePlayer) {
        if ((this.currTime == "0:10") && (this.popup4done == false)) {
            this.popup4 = false;
            this.popup4done = true;
        }
        if ((this.currTime == "0:15") && (this.popup4done == true)) {
            this.popup4 = true;
            this.popup4done = false;
        }
    };
    AppComponent.prototype.checkpopup5 = function (moviePlayer) {
        if ((this.currTime == "0:16") && (this.popup5done == false)) {
            this.popup5 = false;
            this.popup5done = true;
        }
        if ((this.currTime == "0:19") && (this.popup5done == true)) {
            this.popup5 = true;
            this.popup5done = false;
        }
    };
    AppComponent.prototype.updateDisplayTime = function (moviePlayer) {
        this.currTime = this.secondsToMinutesAndSeconds(moviePlayer.currentTime);
        this.currentTimeRange = moviePlayer.currentTime;
        this.checkpopup1(moviePlayer);
        this.checkpopup2(moviePlayer);
        this.checkpopup3(moviePlayer);
        this.checkpopup4(moviePlayer);
        this.checkpopup5(moviePlayer);
    };
    AppComponent.prototype.onMuteUnmute = function (moviePlayer) {
        if (moviePlayer.muted) {
            moviePlayer.muted = false;
            this.volumeMuteImg = "./volume.svg";
        }
        else {
            moviePlayer.muted = true;
            this.volumeMuteImg = "./mute.svg";
        }
    };
    AppComponent.prototype.seek = function (evt, moviePlayer) {
        moviePlayer.pause();
        moviePlayer.currentTime = evt.target.value;
        this.currTime = this.secondsToMinutesAndSeconds(moviePlayer.currentTime);
        this.currentTimeRange = moviePlayer.currentTime;
        moviePlayer.play();
        this.playpauseimg = "./pause.svg";
    };
    AppComponent.prototype.seekVolume = function (event, moviePlayer) {
        var volumeToBeSet = event.target.value;
        moviePlayer.volume = volumeToBeSet / 10;
    };
    AppComponent.prototype.processMetaData = function (moviePlayer) {
        var self = this;
        this.movieLoaded = true;
        moviePlayer.volume = 0.5;
        this.videoDuration = this.secondsToMinutesAndSeconds(moviePlayer.duration);
    };
    AppComponent.prototype.onPlayPause = function (moviePlayer) {
        if (moviePlayer.paused) {
            moviePlayer.play();
            this.playpauseimg = "./pause.svg";
        }
        else {
            moviePlayer.pause();
            this.playpauseimg = "./play.svg";
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    angular2_1.Component({
        selector: 'my-video',
        template: "\n<div >\n  <h1 class=\"titlebig\"> ANLLELA SAGRA - WORKOUT MOTIVATION </h1>\n  <div class=\"vidplay\" >\n    \n    <video class=\"vid\" id=\"mp\" poster=\"./video/ANLLELA-SAGRA-WORKOUT-MOTIVATION-thumbnail.png\" (loadedmetadata)=\"processMetaData(movieplayer)\"  #movieplayer (timeupdate)=\"updateDisplayTime(movieplayer)\" (mouseenter)= \"hideControl(false)\" (mouseout)= \"hideControl(true)\" >\n      <source src=\"./video/ANLLELA-SAGRA-WORKOUT-MOTIVATION.mp4\"/>\n    </video>\n\n    <div class=\"vdctrl\" [hidden]=\"hidectrl\" (mouseenter)= \"hideControl(false)\" (mouseout)= \"hideControl(true)\" >\n      <input [hidden]=\"!movieLoaded\" class=\"slider\" type=\"range\" min=\"0\" style=\"width:99%;\" max=\"{{movieplayer.duration}}\" id=\"myRange\" [(ng-model)]=\"currentTimeRange\" (input)=\"seek($event,movieplayer)\">\n      <div></div>\n      <button (click)=\"onPlayPause(movieplayer)\"><img style=\"width:16px;\" src={{playpauseimg}}></button>\n      <button  (click)=\" onMuteUnmute(movieplayer)\"><img style=\"width:16px;\" src={{volumeMuteImg}}></button>\n      <input #volumerange class=\"volslider\" style=\"width:100px\" type=\"range\" min=\"1\" max=\"10\"   [(ng-model)]=\"volume\" (input)=\"seekVolume($event,movieplayer)\">\n      <span style=\"color:white\">{{currTime}} / {{videoDuration}}</span>\n      <button (click)=\"makeFullScreen(movieplayer)\" style=\"float:right;\"><img style=\"width:16px;\" src=\"./fullscreen.svg\"></button>\n    </div>\n    \n    <div class=\"popupno1\" [hidden]=\"popup1\">\n      <a href=\"https://www.youtube.com/watch?v=PCZ2JHaPvZ4&t=2s\"> Original Video !!! </a>\n    </div>\n\n    <div class=\"popupno2\" [hidden]=\"popup2\">\n      <img class=\"smile\" src=\"smile.png\" alt=\"Smiley face\" height=\"60\" width=\"60\" >\n    </div>\n\n    <div class=\"popupno4\" [hidden]=\"popup4\">\n      <h1>Romanian DeadLift</h1>\n    </div>\n   \n   \t<div class=\"popupno5\" [hidden]=\"popup5\">\n      <h1>LegPress</h1>\n    </div>\n\n\t<div class=\"popupno3\" [hidden]=\"popup3\">\n\t  <strong class=\"summary\"> Summary</strong>\n      <p id=\"eow-description\" class=\"\">\n        <a href=\"https://www.youtube.com/results?search_query=romanian+deadlift\" class=\"yt-uix-servicelink\" rel=\"nofollow noopener\" target=\"_blank\">\n          Romanian DeadLift\n        </a>\n        <br>\n        <a href=\"https://www.youtube.com/results?search_query=leg+press\" class=\"yt-uix-servicelink\" rel=\"nofollow noopener\" target=\"_blank\">\n          LegPress\n        </a>\n      </p>\n\t</div> \n\n  </div>\n\n\n\n</div>\n",
        styles: [" \n\n.titlebig {\n  color:#369;\n  text-align: center;\n}\n.vidplay {\n  display:block;\n  background-color:#000000;\n  height:auto;\n  overflow:hidden;\n  z-index:-1;\n}\n.vid {\n  display: block;\n  width: 70%;\n  margin:0 auto;\n}\n.vdctrl {\n  position: relative;\n  width: 70%;\n  top: -50px;\n  margin: 0 auto;\n  z-index:1;\n}\n.popupno1 {\n  position:absolute;\n  top:15%;\n  left:20%;\n  z-index:1;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size:30px;\n  font-weight:bold;\n  background-color:#ff0000;\n}\n.popupno2 {\n  position:absolute;\n  top:15%;\n  left:60%;\n  z-index:1;\n  background-color:#0066ff;\n}\n.popupno3 {\n  position:absolute;\n  top:30%;\n  left:30%;\n  z-index:1;\t\n  font-size:30px;\n  color:red;\n  background-color:#ffffff;\n}\n.popupno4 {\n  position:absolute;\n  top:50%;\n  left:60%;\n  z-index:1;\t\n  font-size:15px;\n  color:red;\n}\n.popupno5 {\n  position:absolute;\n  top:50%;\n  left:60%;\n  z-index:1;\t\n  font-size:15px;\n  color:red;\n}\n\n\n@media screen and (-webkit-min-device-pixel-ratio:0) { \n\ninput[type=range].slider {\n  -webkit-appearance: none;\n  margin-bottom:10px;\n  width: 100%;\n  \n}\n}\n    \ninput[type=range].slider:focus {\n  outline: none;\n}\ninput[type=range].slider::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 3px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #3b4d4d;\n  border-radius: 18.1px;\n  border: 0px solid #010101;\n}\ninput[type=range].slider::-webkit-slider-thumb {\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\n  border: 0px solid #ff1e00;\n  height: 16px;\n  width: 10px;\n  border-radius: 0px;\n  background: rgba(255, 199, 95, 0.93);\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -7.2px;\n}\ninput[type=range].slider:focus::-webkit-slider-runnable-track {\n  background: #4f6767;\n}\ninput[type=range].slider::-moz-range-track {\n  width: 100%;\n  height: 1.6px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #3b4d4d;\n  border-radius: 18.1px;\n  border: 0px solid #010101;\n}\ninput[type=range].slider::-moz-range-thumb {\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\n  border: 0px solid #ff1e00;\n  height: 16px;\n  width: 10px;\n  border-radius: 0px;\n  background: rgba(255, 199, 95, 0.93);\n  cursor: pointer;\n}\ninput[type=range].slider::-ms-track {\n  width: 100%;\n  height: 1.6px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\ninput[type=range].slider::-ms-fill-lower {\n  background: #273333;\n  border: 0px solid #010101;\n  border-radius: 36.2px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\ninput[type=range].slider::-ms-fill-upper {\n  background: #3b4d4d;\n  border: 0px solid #010101;\n  border-radius: 36.2px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\ninput[type=range].slider::-ms-thumb {\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\n  border: 0px solid #ff1e00;\n  height: 16px;\n  width: 10px;\n  border-radius: 0px;\n  background: rgba(255, 199, 95, 0.93);\n  cursor: pointer;\n  height: 1.6px;\n}\ninput[type=range].slider:focus::-ms-fill-lower {\n  background: #3b4d4d;\n}\ninput[type=range].slider:focus::-ms-fill-upper {\n  background: #4f6767;\n}\n\ninput[type=range].volslider {\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 7.2px 0;\n}\ninput[type=range].volslider:focus {\n  outline: none;\n}\ninput[type=range].volslider::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 1.6px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #3b4d4d;\n  border-radius: 18.1px;\n  border: 0px solid #010101;\n}\ninput[type=range].volslider::-webkit-slider-thumb {\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\n  border: 0px solid #ff1e00;\n  height: 16px;\n  width: 17px;\n  border-radius: 50px;\n  background: #ff0000;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -7.2px;\n}\ninput[type=range].volslider:focus::-webkit-slider-runnable-track {\n  background: #4f6767;\n}\ninput[type=range].volslider::-moz-range-track {\n  width: 100%;\n  height: 1.6px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #3b4d4d;\n  border-radius: 18.1px;\n  border: 0px solid #010101;\n}\ninput[type=range].volslider::-moz-range-thumb {\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\n  border: 0px solid #ff1e00;\n  height: 16px;\n  width: 17px;\n  border-radius: 50px;\n  background: #ff0000;\n  cursor: pointer;\n}\ninput[type=range].volslider::-ms-track {\n  width: 100%;\n  height: 1.6px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\ninput[type=range].volslider::-ms-fill-lower {\n  background: #273333;\n  border: 0px solid #010101;\n  border-radius: 36.2px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\ninput[type=range].volslider::-ms-fill-upper {\n  background: #3b4d4d;\n  border: 0px solid #010101;\n  border-radius: 36.2px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\ninput[type=range].volslider::-ms-thumb {\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\n  border: 0px solid #ff1e00;\n  height: 16px;\n  width: 17px;\n  border-radius: 50px;\n  background: #ff0000;\n  cursor: pointer;\n  height: 1.6px;\n}\ninput[type=range].volslider:focus::-ms-fill-lower {\n  background: #3b4d4d;\n}\ninput[type=range].volslider:focus::-ms-fill-upper {\n  background: #4f6767;\n}\n\n\n\n\n"],
        directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgClass, angular2_1.NgFor, angular2_1.NgIf]
    })
], AppComponent);
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map