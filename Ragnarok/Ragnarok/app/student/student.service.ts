import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpUtilityService } from "../common/services/http-utility.service";
import { Student } from "./student.interface";

@Injectable()
export class StudentService {
    private url = 'api/students';  // URL to web API
    constructor(private http: Http, private httpUtilityService: HttpUtilityService) { }

    getStudents(): Observable<Student[]> {
        return this.http.get(`${this.url}`)
            .map(this.httpUtilityService.extractData)
            .catch(this.httpUtilityService.handleError);
    }

    getStudentById(id: string): Observable<Student> {
        return this.http.get(`${this.url}/${id}`)
            .map(this.httpUtilityService.extractData)
            .catch(this.httpUtilityService.handleError);
    }
}