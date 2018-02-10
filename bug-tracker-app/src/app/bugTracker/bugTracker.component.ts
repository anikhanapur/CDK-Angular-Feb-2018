import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : IBug[] =  [];
	newBugName : string = '';

	constructor(private bugOperations : BugOperationsService){
		
	}

	onCreateNewClick() : void {
		let newBug : IBug = this.bugOperations.createNew(this.newBugName);
		this.bugs = [...this.bugs, newBug];
		this.newBugName = '';
	}

	onBugClick(bug : IBug) : void {
		this.bugOperations.toggle(bug);
	}

	onRemoveClosedClick() : void {
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
	
	getClosedCount() : number {
		//console.log('getClosedCount triggered');
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}