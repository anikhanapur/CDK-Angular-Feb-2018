//app state & app behavior of a calculator
export class CalculatorModel{
	n1 = 0;
	n2 = 0;
	result = 0;

	add(){
		this.result = this.n1 + this.n2;
	}

	subtract(){
		this.result = this.n1 - this.n2;
	}

	multiply(){
		this.result = this.n1 * this.n2;
	}

	divide(){
		this.result = this.n1 / this.n2;
	}
}