"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var student_component_1 = require("./student/student.component");
var result_component_1 = require("./result/result.component");
var result_edit_component_1 = require("./result/edit/result-edit.component");
var results_detail_component_1 = require("./result/detail/results-detail.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/students',
        pathMatch: 'full',
    },
    {
        path: 'students',
        component: student_component_1.StudentComponent
    },
    {
        path: 'results/:id',
        component: result_component_1.ResultComponent
    },
    {
        path: 'results',
        component: result_component_1.ResultComponent
    },
    {
        path: 'results-edit/:id',
        component: result_edit_component_1.ResultEditComponent
    },
    {
        path: 'results-edit/:id1/:id2',
        component: result_edit_component_1.ResultEditComponent
    },
    {
        path: 'results-detail/:id',
        component: results_detail_component_1.ResultDetailComponent
    }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map