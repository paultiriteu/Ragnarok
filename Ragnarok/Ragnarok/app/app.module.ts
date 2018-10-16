import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { Routing } from './app.routing';

//Components
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ResultComponent } from './result/result.component';
import { ResultEditComponent } from './result/edit/result-edit.component';
import { ResultDetailComponent } from "./result/detail/results-detail.component";

//Services
import { HttpUtilityService } from "./common/services/http-utility.service";
import { StudentService } from "./student/student.service";
import { ResultService } from "./result/result.service";
import { SubjectService } from "./subject/subject.service";
import { ProfessorService } from "./professor/professor.service";

//Pipes
import { SortPipe } from "./common/pipes/sort.pipe";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        MaterialModule.forRoot(),
        Routing
    ],
    declarations: [
        AppComponent,
        StudentComponent,
        ResultComponent,
        ResultEditComponent,
        ResultDetailComponent
    ],
    providers: [
        HttpUtilityService,
        StudentService,
        ResultService,
        SubjectService,
        ProfessorService,
        SortPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
