import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpUtilityService } from "../common/services/http-utility.service";
import { Professor } from "../professor/professor.interface";

@Injectable()
export class ProfessorService {
    private url = 'api/professors';  // URL to web API
    constructor(private http: Http, private httpUtilityService: HttpUtilityService) { }

    getProfessors(): Observable<Professor[]> {
        return this.http.get(`${this.url}`)
            .map(this.httpUtilityService.extractData)
            .catch(this.httpUtilityService.handleError);
    }

    getProfessorById(id: string): Observable<Professor> {
        return this.http.get(`${this.url}/${id}`)
            .map(this.httpUtilityService.extractData)
            .catch(this.httpUtilityService.handleError);

    }
}