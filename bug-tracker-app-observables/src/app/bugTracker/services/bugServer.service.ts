import { Injectable } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugOperationsService } from './bugOperations.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import axios from 'axios';
import 'rxjs/add/operator/map';



@Injectable()
export class BugServerService{
	private baseUrl = 'http://localhost:3000/bugs';

	constructor(private http : Http, private bugOperations : BugOperationsService){

	}
	getAll() : Observable<IBug[]> {
		return this.http
			.get(this.baseUrl)
			.map(response => response.json());
	}
	addNew(bugName : string) : Observable<IBug>{
		let newBug = this.bugOperations.createNew(bugName, 0);
		return this.http
			.post(this.baseUrl, newBug)
			.map(response => response.json());
		
	}
	toggle(bugToToggle : IBug) : Observable<IBug>{
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		return this.http
			.put(`${this.baseUrl}/${bugToToggle.id}`, toggledBug)
			.map(response => response.json());
	}
	remove(bugToRemove : IBug) : Observable<any> {
		return this.http
			.delete(`${this.baseUrl}/${bugToRemove.id}`)
			.map(response => response.json());	
	}
}

