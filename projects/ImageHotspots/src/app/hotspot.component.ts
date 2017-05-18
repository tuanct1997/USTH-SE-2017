
import { Component, OnInit } from '@angular/core';
import { Hotspot }              from './hotspot';
import { HotspotService }       from './hotspot.service';

@Component({
	selector: 'my-hotspot',
	templateUrl: './hotspot.component.html',
	providers: [ HotspotService ],
	styleUrls: ['./hotspot.component.css']
})

export class HotspotComponent implements OnInit {
	hotspots: Hotspot[];
	errorMessage: string;
	selectedHotSpot: Hotspot;

	constructor(private _hotspotService: HotspotService) {	}

	ngOnInit(): void {
		this.getHotspot();
	}

	getHotspot() {
		this._hotspotService.getHotspots()
			.subscribe(
			hotspots => this.hotspots = hotspots,
			error => this.errorMessage = <any>error
			);
	}

	// click on back ground = true => close popup
	backgroundSelected = true;

	onSelect(hotspot: Hotspot): void {
		this.backgroundSelected = false;
		this.selectedHotSpot = hotspot;
	}

	onSelectBG(): void {
		this.backgroundSelected = true;
	}

	//set position for hotspot depend on its x y;
	setPosition = function (hotspot: Hotspot) {
		return {
			top: hotspot.y + '%',
			left: hotspot.x + '%',
		}
	};
}