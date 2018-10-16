import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpUtilityService } from "../common/services/http-utility.service";
import { ResultComponent } from "./result.component";
import { Result } from "./result.interface";
import { Professor } from "../professor/professor.interface";

@Injectable()
export class ResultService {
    private url = 'api/results';  // URL to web API
    constructor(private http: Http, private httpUtilityService: HttpUtilityService) { }

    getResults(): Observable<Result[]> {
        return this.http.get(`${this.url}`)
            .map(this.httpUtilityService.extractData)
            .catch(this.httpUtilityService.handleError);
    }

    getResultsByStudentId(id: string): Observable<Result[]> {
        return this.http.get(`${this.url}/getByStudentId/${id}`)
            .map(this.httpUtilityService.extractData)
            .catch(this.httpUtilityService.handleError);
    }

    getResultById(id: string): Observable<Result> {
        return this.http.get(`${this.url}/${id}`)
            .map(this.httpUtilityService.extractData)
            .catch(this.httpUtilityService.handleError);
    }

    updateResult(result: Result): Observable<any> {
        return this.http.post(`${this.url}`, result)
            .catch(this.httpUtilityService.handleError);
    }

    deleteResultById(id: string): Observable<any> {
        return this.http.delete(`${this.url}/${id}`)
            .catch(this.httpUtilityService.handleError);
    }
}