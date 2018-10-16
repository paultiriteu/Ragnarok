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
    selector: 'result-edit',
    styleUrls: ['result-edit.component.css'],
    templateUrl: 'result-edit.component.html',
})
export class ResultEditComponent implements OnInit {

    student: Student = <Student>{
        Id: undefined,
        FirstName: '',
        LastName: '',
        Class: '',
        Year: undefined
    }

    result: Result = <Result>{
        Id: undefined,
        Student_Id: '',
        Subject_Id: '',
        Professor_Id: '',
        Mark: undefined,
        Date: ''
    };

    selectedSubject: Subject = <Subject>{
        Id: undefined,
        Name: ''
    };

    selectedProfessor: Professor = <Professor>{
        Id: undefined,
        FirstName: '',
        LastName: '',
        Subjects: []
    }

    resultId: string = '';
    errorMessage: string = '';
    studentId: string = '';
    subjects: Subject[] = [];
    professors: Professor[] = [];
    filteredProfessors: Professor[] = [];
    originalResult: Result = Object.assign({}, this.result);

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
                this.studentId = params['id'];
                this.getStudent(this.studentId);
                this.getSubjects();
                this.getProfessors();
                this.originalResult = Object.assign({}, this.result);
        });
    }

    getResult(id: string) {
        let sub = this.resultService.getResultById(id).subscribe(p => {
            this.originalResult = p;
            this.getSubjects();
            sub.unsubscribe();
        })
    }

    getStudent(id: string) {
        let sub = this.studentService.getStudentById(id).subscribe(p => {
            this.student = p;
            this.result.Student_Id = this.student.Id;
            sub.unsubscribe();
        });
    }

    getSubjects() {
        let sub = this.subjectService.getSubjects().subscribe(p => {
            this.subjects = p;
            sub.unsubscribe();
        })
    }

    getProfessors() {
        let sub = this.professorService.getProfessors().subscribe(p => {
            this.professors = p;
            if (this.selectedProfessor.Id != undefined)
                this.selectedProfessor = this.professors.find(x => x.Id == this.originalResult.Professor_Id);
            sub.unsubscribe();
        })
    }

    filterProfessors() {
        this.filteredProfessors = this.professors.filter(x => x.Subjects.find(y => y.Id == this.selectedSubject.Id));
    }

    save() {
        this.result.Student_Id = this.student.Id;
        this.result.Subject_Id = this.selectedSubject.Id;
        this.result.Professor_Id = this.selectedProfessor.Id;

        if (this.isValid()) {
            if (this.hasDataChanged())
                this.resultService.updateResult(this.result).subscribe(
                    data => {
                        console.log("Nota a fost salvata!");
                        this.router.navigate(['/results', this.studentId]);
                    },
                    error => { });
            else
                this.router.navigate(['/results-edit', this.studentId]);
        }
    }

    private isValid() {
        this.errorMessage = '';

        if (!this.selectedSubject.Id ||
            !this.result.Mark) {
            this.errorMessage = 'Va rugam sa completati toate campurile!';
            return false;
        }
        if (this.result.Mark > 10 || this.result.Mark < 1) {
            this.errorMessage = 'Nota trebuie sa fie cuprinsa intre 1 si 10!';
            return false;
        }
        return true;
    }

    private hasDataChanged() {
        if (this.result.Subject_Id != this.originalResult.Subject_Id ||
            this.result.Mark != this.originalResult.Mark ||
            this.result.Date != this.originalResult.Date ||
            this.result.Professor_Id != this.originalResult.Professor_Id) {
            return true;
        }
        return false;
    }

    private cancel() {
        this.router.navigate(['/results', this.studentId]);
    }
}
