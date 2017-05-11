
import { Component, OnInit, Input } from '@angular/core';

import { PopUp } from './popup';
import { PopUpService } from './popup.service';

@Component({
	selector: 'my-popup',

	template:`
		<div>
			<template ngFor let-popup [ngForOf]="popups">

				<div *ngIf="popup.id == hotspotID"
						class="popup"
						[ngStyle]="setPopUp(popup)">

					<p>{{popup.content}}</p>
					
					<a target="_blank" href={{popup.link}}>Read more</a>

				</div>

			</template>
		</div>
	`,

	styles: [`
		.popup {
			position: fixed;
			background-color: #ffcccc;
		}
	`],
})

export class PopUpComponent implements OnInit {
	title = "Why u not working!";
	popups: PopUp[];
	@Input() hotspotID: number;

	constructor(
		private popupService: PopUpService,
	) {}

	getPopUps(): void {
		this.popupService.getPopUps().then(popups => this.popups = popups);
	}

	ngOnInit(): void {
		this.getPopUps();
	}

	setPopUp = function(popup: PopUp) {
        return {    
			top : popup.y+'px',
			left: popup.x+'px',
			height: popup.height+'px',
			width: popup.width+'px',
        }
	};

}