import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'app-calculator-one',
	template : `
		<h3>Calculator</h3>
		<hr />
		<input type="number" (change)="model.n1 = $event.target.valueAsNumber">
		<input type="number" (change)="model.n2 = $event.target.valueAsNumber">
		<input type="button" value="Add" (click)="model.add()">
		<input type="button" value="Subtract" (click)="model.subtract()">
		<input type="button" value="Multiply" (click)="model.multiply()">
		<input type="button" value="Divide" (click)="model.divide()">
		<div>{{model.result}}</div>
	`
})
export class CalculatorOneComponent{

	model : CalculatorModel = new CalculatorModel();
	
}