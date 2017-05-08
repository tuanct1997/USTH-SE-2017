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
        template: "\n    \n    <div class=\"background\">\n\n      <ul>\n        <li *ngFor=\"let hotspot of hotspots\"\n          [class.selected]=\"hotspot === selectedHotSpot\"\n          (click)=\"onSelect(hotspot)\">\n          {{hotspot.id}}\n        </li>\n      </ul>\n\n      <div *ngIf=\"selectedHotSpot && !backgroundSelected\">\n        <p>Test popup {{selectedHotSpot.id}} </p>\n      </div>\n\n      <p class=\"background\"\n        (click)=\"onSelectBG()\"></p>\n    </div>\n  ",
        styles: ["\n    .background {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 600px;\n      width: 1200px;\n      border-radius: 4px;\n    }\n  "],
        providers: [
            hotspot_service_1.HotSpotService
        ],
    }),
    __metadata("design:paramtypes", [hotspot_service_1.HotSpotService])
], HotSpotComponent);
exports.HotSpotComponent = HotSpotComponent;
//# sourceMappingURL=hotspot.component.js.map