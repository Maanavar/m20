import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Course } from '../_models';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CourseService {

    constructor(private http: HttpClient) {        
    }

    coursecreate(course: Course, isDraft: boolean): Observable<any> {
        return this.http.post<any>(environment.API_URL + '/managecourse/Add?isDraft='+ isDraft,
            JSON.stringify(
                { 
                    courseId: course.CourseId, 
                    courseKeyword: course.CourseKeyword,
                    courseName: course.CourseName,
                    instructorName: course.InstructorName,
                    courseDescription: course.CourseDescription,
                    courseAnnouncement: course.CourseAnnouncement,         
                    courseImgURL: course.CourseImgURL,    
                    departmentId: course.DepartmentId,
                    department: {        
                        DepartmentName: course.Department.DepartmentName
                    },
                    semesterId: course.SemesterId,
                    semester: {        
                        SemesterName: course.Semester.SemesterName
                    },
                    sectionId: course.SectionId,
                    section: {        
                        SectionName: course.Section.SectionName
                    },
                    publishStatus:  course.PublishStatus,
                    isDraft: course.IsDraft,
                    isArchived: course.IsArchived,
                    publishedDate: course.PublishedDate
                }
            ))
            .pipe(map(res => {
                if (res && res.successCode == "1") {
                    console.log(res);                    
                }
                return res;
            }))
            .pipe(catchError(e => {
                if (!e.error || !e.error.message) {
                    e.error = { message: 'Failed to login.' };
                }
                // this.notificationService.notifyError(e.error.error_info ? e.error.error_info : e.error.message);
                return of(e);
            }));
    }

    getcourses(searchText: string, pageNumber: number, pageSize: number): Observable<any>{
        let queryString =  "";
        
        if(searchText != ""){
            queryString = 'SearchText=' + searchText +'&PageNumber='+ pageNumber +'&PageSize=' + pageSize;
        }
        else{
            queryString = 'PageNumber='+ pageNumber +'&PageSize=' + pageSize;
        }

        return this.http.get<any>(environment.API_URL + '/managecourse/searchlist?' + queryString)
            .pipe(map(res => {
                if (res && res.successCode == "1") {
                    console.log(res);                    
                }
                return res;
            }))
            .pipe(catchError(e => {
                if (!e.error || !e.error.message) {
                    e.error = { message: 'Failed to login.' };
                }
                // this.notificationService.notifyError(e.error.error_info ? e.error.error_info : e.error.message);
                return of(e);
            }));
    }

    managecourse(id: number){
        return this.http.get<any>(environment.API_URL + '/managecourse/' + id)
            .pipe(map(res => {
                if (res && res.successCode == "1") {
                    console.log(res);                    
                }
                return res;
            }))
            .pipe(catchError(e => {
                if (!e.error || !e.error.message) {
                    e.error = { message: 'Failed to login.' };
                }
                // this.notificationService.notifyError(e.error.error_info ? e.error.error_info : e.error.message);
                return of(e);
            }));
    }

    editcourse(id: number, course: Course, isDraft: boolean): Observable<any> {
        return this.http.put<any>(environment.API_URL + '/managecourse/Edit?id='+ id+ '&isDraft=' + isDraft,
            JSON.stringify(
                { 
                    courseId: course.CourseId, 
                    courseKeyword: course.CourseKeyword,
                    courseName: course.CourseName,
                    instructorName: course.InstructorName,
                    courseDescription: course.CourseDescription,
                    courseAnnouncement: course.CourseAnnouncement,         
                    courseImgURL: course.CourseImgURL,    
                    departmentId: course.DepartmentId,
                    department: {        
                        DepartmentName: course.Department.DepartmentName
                    },
                    semesterId: course.SemesterId,
                    semester: {        
                        SemesterName: course.Semester.SemesterName
                    },
                    sectionId: course.SectionId,
                    section: {        
                        SectionName: course.Section.SectionName
                    },
                    publishStatus:  course.PublishStatus,
                    isDraft: course.IsDraft,
                    isArchived: course.IsArchived,
                    publishedDate: course.PublishedDate
                }
            ))
            .pipe(map(res => {
                if (res && res.successCode == "1") {
                    console.log(res);                    
                }
                return res;
            }))
            .pipe(catchError(e => {
                if (!e.error || !e.error.message) {
                    e.error = { message: 'Failed to login.' };
                }
                // this.notificationService.notifyError(e.error.error_info ? e.error.error_info : e.error.message);
                return of(e);
            }));
    }
}