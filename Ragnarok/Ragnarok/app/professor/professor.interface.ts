import { Subject } from "../subject/subject.interface";

export interface Professor {
    Id: string,
    FirstName: string,
    LastName: string,
    Subjects: Subject[]
}