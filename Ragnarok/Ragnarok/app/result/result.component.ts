import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { StudentService } from "../student/student.service";
import { Result } from "./result.interface";
import { Observable } from "rxjs/Observable";
import { Student } from "../student/student.interface";
import { SubjectService } from "../subject/subject.service";
import { Subject } from "../subject/subject.interface";
import { ResultService } from "./result.service";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    styleUrls: ['result.component.css'],
    templateUrl: 'result.component.html',
})
export class ResultComponent implements OnInit {
    subjects: Subject[];
    studentId: string;
    loadedResults: Result[];
    results: Result[];
    filteredResults: Result[] = [];

    student: Student = <Student>{
        Id: undefined,
        FirstName: '',
        LastName: '',
        Class: '',
        Year: undefined
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resultService: ResultService,
        private studentService: StudentService,
        private subjectService: SubjectService
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.studentId = params['id'];
            this.getStudent(this.studentId);
        });
    }

    createResult() {
        this.router.navigate(['/results-edit', this.studentId]);
    }

    getResults() {
        let sub = this.resultService.getResultsByStudentId(this.studentId).subscribe(p => {
            this.results = p;
            this.mapResults();
            sub.unsubscribe();
        })
    }

    getStudent(id: string) {
        let sub = this.studentService.getStudentById(id).subscribe(p => {
            this.student = p;
            this.getSubjects();
            sub.unsubscribe();
        });
    }

    getSubjects() {
        let sub = this.subjectService.getSubjects().subscribe(p => {
            this.subjects = p;
            this.getResults();
            sub.unsubscribe();
        })
    }

    filterResults(id: string) {
        this.filteredResults = this.results.filter(x => x.Subject_Id = id);
    }

    mapResults() {
        this.subjects.forEach(x => {
            x.Results = this.results.filter(y => y.Subject_Id == x.Id);
        })
    }

    goToDetails(result: Result) {
        this.router.navigate(['/results-detail', result.Id]);
    }

}
