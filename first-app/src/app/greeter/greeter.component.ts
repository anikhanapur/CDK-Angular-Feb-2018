import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : 'greeter.component.html'
})
export class GreeterComponent{
	message : string = '[Default greet message]';

	onClearClick(){
		this.message = '';
	}
}