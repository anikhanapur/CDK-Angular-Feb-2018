import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : IBug[] =  [];

	constructor(private bugOperations : BugOperationsService){
		
	}

	onCreateNewClick(bugName : string) : void {
		let newBug : IBug = this.bugOperations.createNew(bugName);
		this.bugs.push(newBug);
	}

	onBugClick(bug : IBug) : void {
		this.bugOperations.toggle(bug);
	}

	onRemoveClosedClick() : void {
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount() : number {
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}