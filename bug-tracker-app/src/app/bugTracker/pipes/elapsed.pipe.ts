import * as moment from 'moment';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'elapsed'
})
export class ElapsedPipe implements PipeTransform {
	transform(value: any, args: any[]): any {
		return moment(value).fromNow();
	}
}