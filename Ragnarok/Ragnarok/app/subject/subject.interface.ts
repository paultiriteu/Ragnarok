import { Professor } from "../professor/professor.interface";
import { Result } from "../result/result.interface";

export interface Subject {
    Id: string,
    Name: string,
    Professors: Professor[],
    Results: Result[]
}