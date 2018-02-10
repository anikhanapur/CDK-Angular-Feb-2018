import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';

import { BugServerService } from './services/bugServer.service';
import * as moment from 'moment';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : IBug[] =  [];
	

	constructor(private bugServer : BugServerService){
	}

	/*
	ngOnInit(){
		//this.bugs = this.bugStorage.getAll();

		this.bugServer
			.getAll()
			.then(bugs => this.bugs = bugs); 
	}

	onNewBugCreated(newBug : IBug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : IBug) : void {
		//let toggledBug = this.bugStorage.toggle(bugToggle);
		this.bugServer
			.toggle(bugToToggle)
			.then(toggledBug => this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug))
		
	}

	onRemoveClosedClick() : void {
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugServer
						.remove(closedBug)
						.then(() => this.bugs = this.bugs.filter(bug => bug.id !== closedBug.id));
	}*/

	async ngOnInit(){
		//this.bugs = this.bugStorage.getAll();

		/*this.bugServer
			.getAll()
			.then(bugs => this.bugs = bugs); */

		this.bugs = await this.bugServer.getAll();

	}

	onNewBugCreated(newBug : IBug){
		this.bugs = [...this.bugs, newBug];
	}

	async onBugClick(bugToToggle : IBug) : void {
		//let toggledBug = this.bugStorage.toggle(bugToggle);
		let toggledBug = await this.bugServer.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
		
	}

	onRemoveClosedClick() : void {
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugServer
						.remove(closedBug)
						.then(() => this.bugs = this.bugs.filter(bug => bug.id !== closedBug.id));
	}
	
}

