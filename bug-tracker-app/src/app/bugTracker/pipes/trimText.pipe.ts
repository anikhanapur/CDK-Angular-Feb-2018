import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'trimText'
})
export class TrimTextPipe implements PipeTransform {
	transform(text : string, trimLength : number = 30){
		console.log('trimText transform triggered');
		return text.length <= trimLength ? text : text.substr(0,trimLength) + '...';
	}
}