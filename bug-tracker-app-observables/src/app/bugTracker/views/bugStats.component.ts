import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { IBug } from '../models/IBug';

@Component({
	selector : 'app-bug-stats',
	template : `
		<section class="stats">
			<span class="closed">{{ bugs | closedCount }}</span>
			<span> / </span>
			<span>{{bugs.length}}</span>
		</section>
	`,
	changeDetection : ChangeDetectionStrategy.OnPush
})
export class BugStatsComponent{
	
	@Input('data')
	bugs : IBug[] = [];

}