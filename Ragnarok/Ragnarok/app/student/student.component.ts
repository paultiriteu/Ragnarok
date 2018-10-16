import { Component, OnInit } from '@angular/core';
import { Student } from "./student.interface";
import { StudentService } from "./student.service";
import { Router } from "@angular/router";
import { SortPipe } from "../common/pipes/sort.pipe";

@Component({
    moduleId: module.id,
    selector: 'student-component',
    styleUrls: ['student.component.css'],
    templateUrl: 'student.component.html'
})
export class StudentComponent implements OnInit {
    students: Student[];
    filteredStudents: Student[] = [];
    selectedYear = 0;

    ngOnInit(): void {
        this.getStudents();
    }

    constructor(
        public studentService: StudentService,
        private router: Router
    ) { }

    private getStudents() {
        let sub = this.studentService.getStudents().subscribe(p => {
            this.students = p;
            this.filteredStudents = p;
            sub.unsubscribe();
        });
    }

    private filterStudents(year: number) {
        if (year != 0)
            this.filteredStudents = this.students.filter(x => x.Year == year);
        else
            this.filteredStudents = this.students;
    }

    private goToResults(id: string) {
        this.router.navigate(['/results', id]);
    }
}