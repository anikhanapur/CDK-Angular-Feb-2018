import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'app-calculator-two',
	template : `
		<h3>Calculator-2</h3>
		<hr>
		<input type="number" (change)="model.n1 = $event.target.valueAsNumber">
		<select (change)="operator=$event.target.value">
			<option value="add">Add</option>
			<option value="subtract">Subtract</option>
			<option value="multiply">Multiply</option>
			<option value="divide">Divide</option>
		</select>
		<input type="number" (change)="model.n2 = $event.target.valueAsNumber">
		<input type="button" value="Calculate" (click)="model[operator]()">
		<div>{{model.result}}</div>
	`
})
export class CalculatorTwoComponent{
	model : CalculatorModel = new CalculatorModel();
	operator : string = 'add';
}