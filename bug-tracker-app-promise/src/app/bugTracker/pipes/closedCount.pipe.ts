import { Pipe, PipeTransform } from '@angular/core';
import { IBug } from '../models/IBug';

@Pipe({
	name: 'closedCount',
	pure : true
})
export class ClosedCountPipe implements PipeTransform {
	transform(bugs: IBug[]): number {
		return bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}