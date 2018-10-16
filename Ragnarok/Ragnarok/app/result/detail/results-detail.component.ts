import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import { ActivatedRoute, Router } from "@angular/router";
import { Result } from "../result.interface";
import { Observable } from "rxjs/Observable";
import { ResultService } from "../result.service";
import { StudentService } from "../../student/student.service";
import { Student } from "../../student/student.interface";
import { Subject } from "../../subject/subject.interface";
import { SubjectService } from "../../subject/subject.service";
import { Professor } from "../../professor/professor.interface";
import { ProfessorService } from "../../professor/professor.service";

@Component({
    moduleId: module.id,
    selector: 'result-detail',
    styleUrls: ['result-detail.component.css'],
    templateUrl: 'result-detail.component.html',
})
export class ResultDetailComponent implements OnInit {
    student: Student = <Student>{
        Id: undefined,
        FirstName: '',
        LastName: '',
        Class: '',
        Year: undefined
    }

    result: Result = <Result>{
        Id: null,
        Student_Id: '',
        Subject_Id: '',
        Professor_Id: '',
        Mark: undefined,
        Date: ''
    };

    subject: Subject = <Subject>{
        Id: undefined,
        Name: ''
    };

    professor: Professor = <Professor>{
        FirstName: '',
        LastName: '',
        Subjects: []
    }

    professors: Professor[] = [];
    id: string;
    studentId: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resultService: ResultService,
        private studentService: StudentService,
        private subjectService: SubjectService,
        private professorService: ProfessorService
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.getResult(this.id);

            if (this.id) {
                let sub = this.resultService.getResultById(this.id).subscribe(result => {
                    this.result = result as Result;
                    sub.unsubscribe();
                })
            }
        });
    }

    getResult(id: string) {
        let sub = this.resultService.getResultById(id).subscribe(p => {
            this.result = p;
            this.getStudent(this.result.Student_Id);
            this.getSubject();
            this.getProfessors();
            sub.unsubscribe();
        })
    }

    getStudent(id: string) {
        let sub = this.studentService.getStudentById(id).subscribe(p => {
            this.student = p;
            sub.unsubscribe();
        });
    }

    getSubject() {
        let sub = this.subjectService.getSubjectById(this.result.Subject_Id).subscribe(p => {
            this.subject = p;
            sub.unsubscribe();
        })
    }

    getProfessors() {
        let sub = this.professorService.getProfessors().subscribe(p => {
            this.professors = p;
            this.professor = this.professors.find(x => x.Id == this.result.Professor_Id);
            sub.unsubscribe();
        })
    }

    private delete() {
        if (this.result) {
            let sub = this.resultService.deleteResultById(this.result.Id).subscribe(
                data => {
                    sub.unsubscribe();
                    this.router.navigate(['/results', this.student.Id]);
                });
        }
    }

    //private edit() {
    //    this.router.navigate(['/results-edit', this.student.Id]);
    //}

    private cancel() {
        this.router.navigate(['/results', this.student.Id]);
    }
}
