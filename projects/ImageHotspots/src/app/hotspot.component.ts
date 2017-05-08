
import { Component,OnInit } from '@angular/core'

import { HotSpot } from './hotspot'
import { HotSpotService } from './hotspot.service'

@Component({
  selector: 'my-hotspot',

  template: `
    
    <div class="background">

      <ul>
        <li *ngFor="let hotspot of hotspots"
          [class.selected]="hotspot === selectedHotSpot"
          (click)="onSelect(hotspot)">
          {{hotspot.id}}
        </li>
      </ul>

      <div *ngIf="selectedHotSpot && !backgroundSelected">
        <p>Test popup {{selectedHotSpot.id}} </p>
      </div>

      <p class="background"
        (click)="onSelectBG()"></p>
    </div>
  `,

  styles: [`
    .background {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 600px;
      width: 1200px;
      border-radius: 4px;
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
}