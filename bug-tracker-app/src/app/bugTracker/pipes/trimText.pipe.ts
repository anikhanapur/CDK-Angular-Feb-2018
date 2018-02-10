import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'trimText'
})
export class TrimTextPipe implements PipeTransform {
	transform(text : string){
		return text.length <= 30 ? text : text.substr(0,30) + '...';
	}
}