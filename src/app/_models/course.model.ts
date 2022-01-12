import { Department } from "./department.model";
import { Sections } from "./sections.model";
import { Semester } from "./semester.model";

export interface Course{
    CourseId?: number;
    CourseKeyword?: string;
    CourseName: string;
    CourseAnnouncement: string;
    CourseDescription: string;
    CourseImgURL: string;
    Students: string;
    Department: Department;
    DepartmentId: number;
    Semester: Semester;
    SemesterId: number;
    Section: Sections;
    SectionId: number;
    PublishStatus?: boolean;
    IsDraft?: boolean;
    IsArchived?: boolean;
    InstructorName: string;
    PublishedDate?: Date;
}