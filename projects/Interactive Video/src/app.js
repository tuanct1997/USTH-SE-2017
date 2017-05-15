System.register(['angular2/angular2'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1;
    var AppComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
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
                AppComponent.prototype.updateDisplayTime = function (moviePlayer) {
                    this.currTime = this.secondsToMinutesAndSeconds(moviePlayer.currentTime);
                    this.currentTimeRange = moviePlayer.currentTime;
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
                AppComponent = __decorate([
                    angular2_1.Component({
                        selector: 'my-video',
                        template: "\n<div>\n  <h1> ANLLELA SAGRA - WORKOUT MOTIVATION </h1>\n  <video class=\"vid\" id=\"mp\" poster=\"./video/ANLLELA-SAGRA-WORKOUT-MOTIVATION-thumbnail.png\" (loadedmetadata)=\"processMetaData(movieplayer)\"  #movieplayer (timeupdate)=\"updateDisplayTime(movieplayer)\" (mouseenter)= \"hideControl(false)\" (mouseout)= \"hideControl(true)\" >\n    <source src=\"./video/ANLLELA-SAGRA-WORKOUT-MOTIVATION.mp4\"/>\n  </video>\n\n\n  <div class=\"vdctrl\" [hidden]=\"hidectrl\"  (mouseenter)= \"hideControl(false)\" (mouseout)= \"hideControl(true)\" >\n    <input [hidden]=\"!movieLoaded\" class=\"slider\" type=\"range\" min=\"0\" style=\"width:99%;height:2px;\" max=\"{{movieplayer.duration}}\" id=\"myRange\" [(ng-model)]=\"currentTimeRange\" (input)=\"seek($event,movieplayer)\">\n    <div></div>\n    <button (click)=\"onPlayPause(movieplayer)\"><img style=\"width:16px;\" src={{playpauseimg}}></button>\n    <button  (click)=\" onMuteUnmute(movieplayer)\"><img style=\"width:16px;\" src={{volumeMuteImg}}></button>\n    \n    <input #volumerange class=\"volslider\" style=\"width:80px\" type=\"range\" min=\"1\" max=\"10\"   [(ng-model)]=\"volume\" (input)=\"seekVolume($event,movieplayer)\">\n    <span style=\"color:white\">{{currTime}} / {{videoDuration}}</span>\n\n    <button (click)=\"makeFullScreen(movieplayer)\" style=\"align-items:right;\"><img style=\"width:16px;\" src=\"./fullscreen.svg\"></button>\n  </div>\n</div>\n",
                        styles: [" \n@media screen and (-webkit-min-device-pixel-ratio:0) { \n\ninput[type=range].slider {\n  -webkit-appearance: none;\n  margin-bottom:10px;\n  width: 100%;\n  \n}\n}\n    \ninput[type=range].slider:focus {\n  outline: none;\n}\ninput[type=range].slider::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 1.6px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #3b4d4d;\n  border-radius: 18.1px;\n  border: 0px solid #010101;\n}\ninput[type=range].slider::-webkit-slider-thumb {\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\n  border: 0px solid #ff1e00;\n  height: 16px;\n  width: 10px;\n  border-radius: 0px;\n  background: rgba(255, 199, 95, 0.93);\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -7.2px;\n}\ninput[type=range].slider:focus::-webkit-slider-runnable-track {\n  background: #4f6767;\n}\ninput[type=range].slider::-moz-range-track {\n  width: 100%;\n  height: 1.6px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #3b4d4d;\n  border-radius: 18.1px;\n  border: 0px solid #010101;\n}\ninput[type=range].slider::-moz-range-thumb {\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\n  border: 0px solid #ff1e00;\n  height: 16px;\n  width: 10px;\n  border-radius: 0px;\n  background: rgba(255, 199, 95, 0.93);\n  cursor: pointer;\n}\ninput[type=range].slider::-ms-track {\n  width: 100%;\n  height: 1.6px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\ninput[type=range].slider::-ms-fill-lower {\n  background: #273333;\n  border: 0px solid #010101;\n  border-radius: 36.2px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\ninput[type=range].slider::-ms-fill-upper {\n  background: #3b4d4d;\n  border: 0px solid #010101;\n  border-radius: 36.2px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\ninput[type=range].slider::-ms-thumb {\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\n  border: 0px solid #ff1e00;\n  height: 16px;\n  width: 10px;\n  border-radius: 0px;\n  background: rgba(255, 199, 95, 0.93);\n  cursor: pointer;\n  height: 1.6px;\n}\ninput[type=range].slider:focus::-ms-fill-lower {\n  background: #3b4d4d;\n}\ninput[type=range].slider:focus::-ms-fill-upper {\n  background: #4f6767;\n}\n\ninput[type=range].volslider {\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 7.2px 0;\n}\ninput[type=range].volslider:focus {\n  outline: none;\n}\ninput[type=range].volslider::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 1.6px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #3b4d4d;\n  border-radius: 18.1px;\n  border: 0px solid #010101;\n}\ninput[type=range].volslider::-webkit-slider-thumb {\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\n  border: 0px solid #ff1e00;\n  height: 16px;\n  width: 17px;\n  border-radius: 50px;\n  background: #ff0000;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -7.2px;\n}\ninput[type=range].volslider:focus::-webkit-slider-runnable-track {\n  background: #4f6767;\n}\ninput[type=range].volslider::-moz-range-track {\n  width: 100%;\n  height: 1.6px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #3b4d4d;\n  border-radius: 18.1px;\n  border: 0px solid #010101;\n}\ninput[type=range].volslider::-moz-range-thumb {\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\n  border: 0px solid #ff1e00;\n  height: 16px;\n  width: 17px;\n  border-radius: 50px;\n  background: #ff0000;\n  cursor: pointer;\n}\ninput[type=range].volslider::-ms-track {\n  width: 100%;\n  height: 1.6px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\ninput[type=range].volslider::-ms-fill-lower {\n  background: #273333;\n  border: 0px solid #010101;\n  border-radius: 36.2px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\ninput[type=range].volslider::-ms-fill-upper {\n  background: #3b4d4d;\n  border: 0px solid #010101;\n  border-radius: 36.2px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\ninput[type=range].volslider::-ms-thumb {\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\n  border: 0px solid #ff1e00;\n  height: 16px;\n  width: 17px;\n  border-radius: 50px;\n  background: #ff0000;\n  cursor: pointer;\n  height: 1.6px;\n}\ninput[type=range].volslider:focus::-ms-fill-lower {\n  background: #3b4d4d;\n}\ninput[type=range].volslider:focus::-ms-fill-upper {\n  background: #4f6767;\n}\n\n\n\n\n"],
                        directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgClass, angular2_1.NgFor, angular2_1.NgIf]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            angular2_1.bootstrap(AppComponent);
        }
    }
});
//# sourceMappingURL=app.js.map