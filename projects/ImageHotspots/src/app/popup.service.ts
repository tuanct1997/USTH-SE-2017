
import { Injectable } from '@angular/core';

import { PopUp } from './popup';
import { POPUPS } from './popup-mock';

@Injectable()

export class PopUpService {

	getPopUps(): Promise<PopUp[]> {

	   return Promise.resolve(POPUPS);
	
	}

}