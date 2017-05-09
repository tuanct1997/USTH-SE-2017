"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hotspot_service_1 = require("./hotspot.service");
var HotSpotComponent = (function () {
    function HotSpotComponent(hotspotService) {
        this.hotspotService = hotspotService;
        //click on back ground = true => close popup
        this.backgroundSelected = true;
        //set position for hotspot depend on its x y;
        this.setPosition = function (hotspot) {
            return {
                top: hotspot.y + 'px',
                left: hotspot.x + 'px',
            };
        };
    }
    HotSpotComponent.prototype.onSelect = function (hotspot) {
        this.backgroundSelected = false;
        this.selectedHotSpot = hotspot;
    };
    HotSpotComponent.prototype.onSelectBG = function () {
        this.backgroundSelected = true;
    };
    HotSpotComponent.prototype.getHotSpots = function () {
        var _this = this;
        this.hotspotService.getHotSpots().then(function (hotspots) { return _this.hotspots = hotspots; });
    };
    HotSpotComponent.prototype.ngOnInit = function () {
        this.getHotSpots();
    };
    return HotSpotComponent;
}());
HotSpotComponent = __decorate([
    core_1.Component({
        selector: 'my-hotspot',
        template: "\n    \n    <div>\n\t\t\n\t  <p class=\"background\"\n        (click)=\"onSelectBG()\"></p>\n      \n\t  <p class=\"hotspot\"\n\t\t\t*ngFor=\"let hotspot of hotspots\"\n\t\t\t[class.selected]=\"hotspot === selectedHotSpot\"\n\t\t\t(click)=\"onSelect(hotspot)\"\n\t\t\t\n\t\t\t[ngStyle]=\"setPosition(hotspot)\">\n\t\t\t{{hotspot.id}}\n      </p>\n\n\n      <div\tclass=\"popup\"\n\t\t\t*ngIf=\"selectedHotSpot && !backgroundSelected\">\n        <p>Test popup {{selectedHotSpot.id}} </p>\n      </div>\n\t  \n    </div>\n  ",
        styles: ["\n    .background {\n      position: fixed;\n\t  top: 40;\n      left: 50;\n      background-color: #ff9933;\n      height: 500px;\n      width: 1300px;\n      border-radius: 4px;\n    }\n\n\t.hotspot {\n\t\tbackground-color: #33adff;\n\t\twidth: 50px;\n\t\theight: 50px;\n\t\tborder-radius: 50%;\n\t\tdisplay: solid;\n\n\t\tposition: fixed;\n\t}\n\n\t.popup {\n\t\theight: 100px;\n\t\twidth: 600px;\n\t\tposition: fixed;\n\t\tbackground-color: #ffcccc;\n\t\ttop: 340px;\n\t\tleft: 340px;\n\t}\n  "],
        providers: [
            hotspot_service_1.HotSpotService
        ],
    }),
    __metadata("design:paramtypes", [hotspot_service_1.HotSpotService])
], HotSpotComponent);
exports.HotSpotComponent = HotSpotComponent;
//# sourceMappingURL=hotspot.component.js.map