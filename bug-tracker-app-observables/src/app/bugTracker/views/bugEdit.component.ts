import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BugServerService } from '../services/bugServer.service';

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

	constructor(private bugServer : BugServerService){
	}

	ngOnInit() {
		
	}
	
	onCreateNewClick() : void {
		this.bugServer
			.addNew(this.newBugName)
			.subscribe(newBug => this.bugCreated.emit(newBug));
	}
}