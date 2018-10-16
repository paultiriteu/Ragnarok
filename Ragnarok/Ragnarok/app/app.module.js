"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var app_routing_1 = require("./app.routing");
//Components
var app_component_1 = require("./app.component");
var student_component_1 = require("./student/student.component");
var result_component_1 = require("./result/result.component");
var result_edit_component_1 = require("./result/edit/result-edit.component");
var results_detail_component_1 = require("./result/detail/results-detail.component");
//Services
var http_utility_service_1 = require("./common/services/http-utility.service");
var student_service_1 = require("./student/student.service");
var result_service_1 = require("./result/result.service");
var subject_service_1 = require("./subject/subject.service");
var professor_service_1 = require("./professor/professor.service");
//Pipes
var sort_pipe_1 = require("./common/pipes/sort.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            material_1.MaterialModule.forRoot(),
            app_routing_1.Routing
        ],
        declarations: [
            app_component_1.AppComponent,
            student_component_1.StudentComponent,
            result_component_1.ResultComponent,
            result_edit_component_1.ResultEditComponent,
            results_detail_component_1.ResultDetailComponent
        ],
        providers: [
            http_utility_service_1.HttpUtilityService,
            student_service_1.StudentService,
            result_service_1.ResultService,
            subject_service_1.SubjectService,
            professor_service_1.ProfessorService,
            sort_pipe_1.SortPipe
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map