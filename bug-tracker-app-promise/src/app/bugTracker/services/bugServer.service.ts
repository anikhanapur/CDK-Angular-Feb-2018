import { Injectable } from '@angular/core';
import { IBug } from '../models/IBug';
import axios from 'axios';
import { BugOperationsService } from './bugOperations.service';

@Injectable()
export class BugServerService{
	private baseUrl = 'http://localhost:3000/bugs';

	constructor(private bugOperations : BugOperationsService){

	}
	getAll() : Promise<IBug[]>{
		return axios
			.get(this.baseUrl)
			.then(response => response.data);
	}
	addNew(bugName : string) : Promise<IBug>{
		let newBug = this.bugOperations.createNew(bugName, 0);
		return axios
			.post(this.baseUrl, newBug)
			.then(response => response.data);
		
	}
	toggle(bugToToggle : IBug) : Promise<IBug>{
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		return axios
			.put(`${this.baseUrl}/${bugToToggle.id}`, toggledBug)
			.then(response => response.data);
	}
	remove(bugToRemove : IBug) : Promise<any> {
		return axios
			.delete(`${this.baseUrl}/${bugToRemove.id}`)
			.then(response => response.data);	
	}
}

