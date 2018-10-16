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
var http_1 = require("@angular/http");
var http_utility_service_1 = require("../common/services/http-utility.service");
var ProfessorService = (function () {
    function ProfessorService(http, httpUtilityService) {
        this.http = http;
        this.httpUtilityService = httpUtilityService;
        this.url = 'api/professors'; // URL to web API
    }
    ProfessorService.prototype.getProfessors = function () {
        return this.http.get("" + this.url)
            .map(this.httpUtilityService.extractData)
            .catch(this.httpUtilityService.handleError);
    };
    ProfessorService.prototype.getProfessorById = function (id) {
        return this.http.get(this.url + "/" + id)
            .map(this.httpUtilityService.extractData)
            .catch(this.httpUtilityService.handleError);
    };
    return ProfessorService;
}());
ProfessorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, http_utility_service_1.HttpUtilityService])
], ProfessorService);
exports.ProfessorService = ProfessorService;
//# sourceMappingURL=professor.service.js.map