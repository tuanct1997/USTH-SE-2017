
import { Component, OnInit, Input } from '@angular/core';

import { PopUp } from './popup';
import { PopUpService } from './popup.service';

@Component({
	selector: 'my-popup',

	template:`

		<template ngFor let-popup [ngForOf]="popups">

			<p *ngIf="popup.id == hotspotID">{{popup.content}}</p>

		</template>
	`,
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

}