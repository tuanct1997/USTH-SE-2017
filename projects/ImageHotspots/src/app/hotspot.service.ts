
import { Injectable } from '@angular/core';

import { HotSpot } from './hotspot';
import { HOTSPOTS } from './hotspot-mock';

@Injectable()

export class HotSpotService {
  
  getHotSpots(): Promise<HotSpot[]> {
      return Promise.resolve(HOTSPOTS);
  }

}