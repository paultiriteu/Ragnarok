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
var ResultDetailComponent = (function () {
    function ResultDetailComponent(route, router, resultService, studentService, subjectService, professorService) {
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
            Id: null,
            Student_Id: '',
            Subject_Id: '',
            Professor_Id: '',
            Mark: undefined,
            Date: ''
        };
        this.subject = {
            Id: undefined,
            Name: ''
        };
        this.professor = {
            FirstName: '',
            LastName: '',
            Subjects: []
        };
        this.professors = [];
        this.studentId = '';
    }
    ResultDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.getResult(_this.id);
            if (_this.id) {
                var sub_1 = _this.resultService.getResultById(_this.id).subscribe(function (result) {
                    _this.result = result;
                    sub_1.unsubscribe();
                });
            }
        });
    };
    ResultDetailComponent.prototype.getResult = function (id) {
        var _this = this;
        var sub = this.resultService.getResultById(id).subscribe(function (p) {
            _this.result = p;
            _this.getStudent(_this.result.Student_Id);
            _this.getSubject();
            _this.getProfessors();
            sub.unsubscribe();
        });
    };
    ResultDetailComponent.prototype.getStudent = function (id) {
        var _this = this;
        var sub = this.studentService.getStudentById(id).subscribe(function (p) {
            _this.student = p;
            sub.unsubscribe();
        });
    };
    ResultDetailComponent.prototype.getSubject = function () {
        var _this = this;
        var sub = this.subjectService.getSubjectById(this.result.Subject_Id).subscribe(function (p) {
            _this.subject = p;
            sub.unsubscribe();
        });
    };
    ResultDetailComponent.prototype.getProfessors = function () {
        var _this = this;
        var sub = this.professorService.getProfessors().subscribe(function (p) {
            _this.professors = p;
            _this.professor = _this.professors.find(function (x) { return x.Id == _this.result.Professor_Id; });
            sub.unsubscribe();
        });
    };
    ResultDetailComponent.prototype.delete = function () {
        var _this = this;
        if (this.result) {
            var sub_2 = this.resultService.deleteResultById(this.result.Id).subscribe(function (data) {
                sub_2.unsubscribe();
                _this.router.navigate(['/results', _this.student.Id]);
            });
        }
    };
    //private edit() {
    //    this.router.navigate(['/results-edit', this.student.Id]);
    //}
    ResultDetailComponent.prototype.cancel = function () {
        this.router.navigate(['/results', this.student.Id]);
    };
    return ResultDetailComponent;
}());
ResultDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'result-detail',
        styleUrls: ['result-detail.component.css'],
        templateUrl: 'result-detail.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        result_service_1.ResultService,
        student_service_1.StudentService,
        subject_service_1.SubjectService,
        professor_service_1.ProfessorService])
], ResultDetailComponent);
exports.ResultDetailComponent = ResultDetailComponent;
//# sourceMappingURL=results-detail.component.js.map