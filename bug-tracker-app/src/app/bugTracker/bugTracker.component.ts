import { Component } from '@angular/core';

 

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs  =  [];

	onCreateNewClick(bugName){
		let newBug = {
			name : bugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	onBugClick(bug){
		bug.isClosed = !bug.isClosed;
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}