import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ResultComponent } from './result/result.component';
import { ResultEditComponent } from "./result/edit/result-edit.component";
import { ResultDetailComponent } from "./result/detail/results-detail.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/students',
        pathMatch: 'full',
    },
    {
        path: 'students',
        component: StudentComponent
    },
    {
        path: 'results/:id',
        component: ResultComponent
    },
    {
        path: 'results',
        component: ResultComponent
    },
    {
        path: 'results-edit/:id',
        component: ResultEditComponent
    },
    {
        path: 'results-edit/:id1/:id2',
        component: ResultEditComponent
    },
    {
        path: 'results-detail/:id',
        component: ResultDetailComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });