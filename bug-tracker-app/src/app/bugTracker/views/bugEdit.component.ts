import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BugStorageService } from '../services/bugStorage.service';

import { IBug } from '../models/IBug';

@Component({
	
	selector: 'app-bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" [(ngModel)]="newBugName">
			<input type="button" value="Create New" (click)="onCreateNewClick()">
		</section>
	`
})
export class BugEditComponent implements OnInit {

	newBugName : string = '';
	
	@Output()
	bugCreated : EventEmitter<IBug>  = new EventEmitter<IBug>();

	constructor(private bugStorage : BugStorageService) {

	}

	ngOnInit() {
		
	}
	
	onCreateNewClick() : void {
		let newBug : IBug = this.bugStorage.addNew(this.newBugName);
		this.newBugName = '';
		//this.bugs = [...this.bugs, newBug];
		this.bugCreated.emit(newBug);
	}
}