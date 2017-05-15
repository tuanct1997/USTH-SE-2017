
import { Component,OnInit } from '@angular/core';

import { HotSpot } from './hotspot';
import { HotSpotService } from './hotspot.service';

@Component({
  selector: 'my-hotspot',

  template: `
    
    <div>
		
	  <p class="background"
        (click)="onSelectBG()"></p>
      
	  <p class="hotspot"
			*ngFor="let hotspot of hotspots"
			[class.selected]="hotspot === selectedHotSpot"
			(click)="onSelect(hotspot)"
			
			[ngStyle]="setPosition(hotspot)">
			{{hotspot.id}}
      </p>


      <div *ngIf="!backgroundSelected">

		<my-popup [hotspotID]="selectedHotSpot.id"></my-popup>
      </div>
	  
    </div>
  `,

  styles: [`
    .background {
      position: fixed;
	  top: 40;
      left: 50;
      background-color: #ff9933;
      height: 500px;
      width: 1300px;
      border-radius: 4px;
    }

	.hotspot {
		background-color: #33adff;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		display: solid;

		position: fixed;
	}

  `],

  providers: [
    HotSpotService
  ],
})

export class HotSpotComponent implements OnInit {
  hotspots: HotSpot[];

  selectedHotSpot: HotSpot;

  //click on back ground = true => close popup
  backgroundSelected = true;

  onSelect(hotspot: HotSpot): void{
    this.backgroundSelected = false;
    this.selectedHotSpot = hotspot;
  }

  onSelectBG(): void{
    this.backgroundSelected = true;
  }

  constructor(
    private hotspotService: HotSpotService,
  ) {}

  getHotSpots(): void {
    this.hotspotService.getHotSpots().then(hotspots => this.hotspots = hotspots);
  }

  ngOnInit(): void {
    this.getHotSpots();
  }

  //set position for hotspot depend on its x y;
  setPosition = function(hotspot: HotSpot) {
        return {    
			top : hotspot.y+'px',
			left: hotspot.x+'px',
        }
	};
}