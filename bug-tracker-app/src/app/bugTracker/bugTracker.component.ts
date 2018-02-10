import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/bugStorage.service';

import * as moment from 'moment';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : IBug[] =  [];
	

	constructor(private bugStorage : BugStorageService){
	}

	ngOnInit(){
		this.bugs = this.bugStorage.getAll();
	}

	onNewBugCreated(newBug : IBug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : IBug) : void {
		let toggledBug = this.bugStorage.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick() : void {
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugStorage.remove(closedBug));
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
	
}