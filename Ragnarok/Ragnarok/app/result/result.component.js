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
var student_service_1 = require("../student/student.service");
var subject_service_1 = require("../subject/subject.service");
var result_service_1 = require("./result.service");
var ResultComponent = (function () {
    function ResultComponent(route, router, resultService, studentService, subjectService) {
        this.route = route;
        this.router = router;
        this.resultService = resultService;
        this.studentService = studentService;
        this.subjectService = subjectService;
        this.filteredResults = [];
        this.student = {
            Id: undefined,
            FirstName: '',
            LastName: '',
            Class: '',
            Year: undefined
        };
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.studentId = params['id'];
            _this.getStudent(_this.studentId);
        });
    };
    ResultComponent.prototype.createResult = function () {
        this.router.navigate(['/results-edit', this.studentId]);
    };
    ResultComponent.prototype.getResults = function () {
        var _this = this;
        var sub = this.resultService.getResultsByStudentId(this.studentId).subscribe(function (p) {
            _this.results = p;
            _this.mapResults();
            sub.unsubscribe();
        });
    };
    ResultComponent.prototype.getStudent = function (id) {
        var _this = this;
        var sub = this.studentService.getStudentById(id).subscribe(function (p) {
            _this.student = p;
            _this.getSubjects();
            sub.unsubscribe();
        });
    };
    ResultComponent.prototype.getSubjects = function () {
        var _this = this;
        var sub = this.subjectService.getSubjects().subscribe(function (p) {
            _this.subjects = p;
            _this.getResults();
            sub.unsubscribe();
        });
    };
    ResultComponent.prototype.filterResults = function (id) {
        this.filteredResults = this.results.filter(function (x) { return x.Subject_Id = id; });
    };
    ResultComponent.prototype.mapResults = function () {
        var _this = this;
        this.subjects.forEach(function (x) {
            x.Results = _this.results.filter(function (y) { return y.Subject_Id == x.Id; });
        });
    };
    ResultComponent.prototype.goToDetails = function (result) {
        this.router.navigate(['/results-detail', result.Id]);
    };
    return ResultComponent;
}());
ResultComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        styleUrls: ['result.component.css'],
        templateUrl: 'result.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        result_service_1.ResultService,
        student_service_1.StudentService,
        subject_service_1.SubjectService])
], ResultComponent);
exports.ResultComponent = ResultComponent;
//# sourceMappingURL=result.component.js.map