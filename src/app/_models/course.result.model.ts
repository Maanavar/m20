import { List } from "lodash";
import { Course } from "./course.model";

export interface CourseResult{
    CurrentPage: number;
    FirstRowOnPage: number;
    LastRowOnPage: number;
    PageCount: number;
    PageSize: number;
    RowCount: number;
    Results: Course[];
}