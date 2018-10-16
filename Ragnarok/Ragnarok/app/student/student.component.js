"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var student_service_1 = require("./student.service");
var router_1 = require("@angular/router");
var StudentComponent = (function () {
    function StudentComponent(studentService, router) {
        this.studentService = studentService;
        this.router = router;
        this.filteredStudents = [];
        this.selectedYear = 0;
    }
    StudentComponent.prototype.ngOnInit = function () {
        this.getStudents();
    };
    StudentComponent.prototype.getStudents = function () {
        var _this = this;
        var sub = this.studentService.getStudents().subscribe(function (p) {
            _this.students = p;
            _this.filteredStudents = p;
            sub.unsubscribe();
        });
    };
    StudentComponent.prototype.filterStudents = function (year) {
        if (year != 0)
            this.filteredStudents = this.students.filter(function (x) { return x.Year == year; });
        else
            this.filteredStudents = this.students;
    };
    StudentComponent.prototype.goToResults = function (id) {
        this.router.navigate(['/results', id]);
    };
    return StudentComponent;
}());
StudentComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'student-component',
        styleUrls: ['student.component.css'],
        templateUrl: 'student.component.html'
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService,
        router_1.Router])
], StudentComponent);
exports.StudentComponent = StudentComponent;
//# sourceMappingURL=student.component.js.map