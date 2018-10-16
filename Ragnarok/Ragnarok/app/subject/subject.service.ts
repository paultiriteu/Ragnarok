import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpUtilityService } from "../common/services/http-utility.service";
import { Subject } from "./subject.interface";

@Injectable()
export class SubjectService {
    private url = 'api/subjects';  // URL to web API
    constructor(private http: Http, private httpUtilityService: HttpUtilityService) { }

    getSubjects(): Observable<Subject[]> {
        return this.http.get(`${this.url}`)
            .map(this.httpUtilityService.extractData)
            .catch(this.httpUtilityService.handleError);
    }

    getSubjectById(id: string): Observable<Subject> {
        return this.http.get(`${this.url}/${id}`)
            .map(this.httpUtilityService.extractData)
            .catch(this.httpUtilityService.handleError);
    }
}