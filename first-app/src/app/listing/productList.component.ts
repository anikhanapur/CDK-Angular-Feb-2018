import { Component } from '@angular/core';


@Component({
	selector : 'app-product-list',
	template : `
		<h3>Products</h3>
		<hr>
		<label for="">Product Name :</label>
		<input type="text" #txtItemName>
		<input type="button" value="Add New" (click)="items.push(txtItemName.value)">
		<div>{{items.length}}</div>
		<ol>
			<li *ngFor="let item of items">{{item}}</li>
		</ol>
	`
})
export class ProductListComponent{
	items : string[] = ['Pen', 'Pencil'];
}