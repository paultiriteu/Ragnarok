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
var router_1 = require("@angular/router");
var result_service_1 = require("../result.service");
var student_service_1 = require("../../student/student.service");
var subject_service_1 = require("../../subject/subject.service");
var professor_service_1 = require("../../professor/professor.service");
var ResultEditComponent = (function () {
    function ResultEditComponent(route, router, resultService, studentService, subjectService, professorService) {
        this.route = route;
        this.router = router;
        this.resultService = resultService;
        this.studentService = studentService;
        this.subjectService = subjectService;
        this.professorService = professorService;
        this.student = {
            Id: undefined,
            FirstName: '',
            LastName: '',
            Class: '',
            Year: undefined
        };
        this.result = {
            Id: undefined,
            Student_Id: '',
            Subject_Id: '',
            Professor_Id: '',
            Mark: undefined,
            Date: ''
        };
        this.selectedSubject = {
            Id: undefined,
            Name: ''
        };
        this.selectedProfessor = {
            Id: undefined,
            FirstName: '',
            LastName: '',
            Subjects: []
        };
        this.resultId = '';
        this.errorMessage = '';
        this.studentId = '';
        this.subjects = [];
        this.professors = [];
        this.filteredProfessors = [];
        this.originalResult = Object.assign({}, this.result);
    }
    ResultEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.studentId = params['id'];
            _this.getStudent(_this.studentId);
            _this.getSubjects();
            _this.getProfessors();
            _this.originalResult = Object.assign({}, _this.result);
        });
    };
    ResultEditComponent.prototype.getResult = function (id) {
        var _this = this;
        var sub = this.resultService.getResultById(id).subscribe(function (p) {
            _this.originalResult = p;
            _this.getSubjects();
            sub.unsubscribe();
        });
    };
    ResultEditComponent.prototype.getStudent = function (id) {
        var _this = this;
        var sub = this.studentService.getStudentById(id).subscribe(function (p) {
            _this.student = p;
            _this.result.Student_Id = _this.student.Id;
            sub.unsubscribe();
        });
    };
    ResultEditComponent.prototype.getSubjects = function () {
        var _this = this;
        var sub = this.subjectService.getSubjects().subscribe(function (p) {
            _this.subjects = p;
            sub.unsubscribe();
        });
    };
    ResultEditComponent.prototype.getProfessors = function () {
        var _this = this;
        var sub = this.professorService.getProfessors().subscribe(function (p) {
            _this.professors = p;
            if (_this.selectedProfessor.Id != undefined)
                _this.selectedProfessor = _this.professors.find(function (x) { return x.Id == _this.originalResult.Professor_Id; });
            sub.unsubscribe();
        });
    };
    ResultEditComponent.prototype.filterProfessors = function () {
        var _this = this;
        this.filteredProfessors = this.professors.filter(function (x) { return x.Subjects.find(function (y) { return y.Id == _this.selectedSubject.Id; }); });
    };
    ResultEditComponent.prototype.save = function () {
        var _this = this;
        this.result.Student_Id = this.student.Id;
        this.result.Subject_Id = this.selectedSubject.Id;
        this.result.Professor_Id = this.selectedProfessor.Id;
        if (this.isValid()) {
            if (this.hasDataChanged())
                this.resultService.updateResult(this.result).subscribe(function (data) {
                    console.log("Nota a fost salvata!");
                    _this.router.navigate(['/results', _this.studentId]);
                }, function (error) { });
            else
                this.router.navigate(['/results-edit', this.studentId]);
        }
    };
    ResultEditComponent.prototype.isValid = function () {
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
    };
    ResultEditComponent.prototype.hasDataChanged = function () {
        if (this.result.Subject_Id != this.originalResult.Subject_Id ||
            this.result.Mark != this.originalResult.Mark ||
            this.result.Date != this.originalResult.Date ||
            this.result.Professor_Id != this.originalResult.Professor_Id) {
            return true;
        }
        return false;
    };
    ResultEditComponent.prototype.cancel = function () {
        this.router.navigate(['/results', this.studentId]);
    };
    return ResultEditComponent;
}());
ResultEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'result-edit',
        styleUrls: ['result-edit.component.css'],
        templateUrl: 'result-edit.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        result_service_1.ResultService,
        student_service_1.StudentService,
        subject_service_1.SubjectService,
        professor_service_1.ProfessorService])
], ResultEditComponent);
exports.ResultEditComponent = ResultEditComponent;
//# sourceMappingURL=result-edit.component.js.map