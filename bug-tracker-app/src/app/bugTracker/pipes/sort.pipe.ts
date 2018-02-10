import { Pipe, PipeTransform } from '@angular/core';

interface IComparer{
	(p1 : any, p2 : any) : number
}


@Pipe({
	name : 'sort'
})
export class SortPipe implements PipeTransform{
	private getComparerFor(attrName : string ) : IComparer {
		return function(p1 : any, p2 : any) : number {
	        if (p1[attrName] < p2[attrName]) return -1;
	        if (p1[attrName] > p2[attrName]) return 1;
	        return 0;
	    }
	}

	private getDescendingComparerFor(comparer) : IComparer {
		return function(p1 : any, p2 : any) : number {
			return comparer(p1, p2) * -1;
	    }
	}
	transform(data : any[], attrName : string, isDescending : boolean = false) : any[]{
		if (!attrName) return data;
		let comparer = this.getComparerFor(attrName);
		if (isDescending)
			comparer = this.getDescendingComparerFor(comparer);
		return data.sort(comparer);
	}
}