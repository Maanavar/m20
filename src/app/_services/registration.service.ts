import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { User, Register } from '../_models';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class RegistrationService {

    constructor(private http: HttpClient) {        
    }

    accountSetup(user: User): Observable<any> {
        return this.http.post<any>(environment.API_URL + '/registration/AccountSetup',
            JSON.stringify(
                { 
                    email: user.Email, 
                    firstName: user.FirstName,
                    lastName: user.LastName,
                    middleName: user.MiddleName,
                    dateOfBirth: user.DateOfBirth,          
                    currentAddress: {
                        PostalCode: user.CurrentAddress.PostalCode,
                        State: user.CurrentAddress.State,
                        Country:  user.CurrentAddress.Country,
                        AddressLine1:  user.CurrentAddress.AddressLine1,
                        AddressLine2:  user.CurrentAddress.AddressLine2,
                        City:  user.CurrentAddress.City
                    },
                    permanentAddress: {
                        PostalCode: user.CurrentAddress.PostalCode,
                        State: user.CurrentAddress.State,
                        Country:  user.CurrentAddress.Country,
                        AddressLine1:  user.CurrentAddress.AddressLine1,
                        AddressLine2:  user.CurrentAddress.AddressLine2,
                        City:  user.CurrentAddress.City
                    },
                    roleId: user.RoleId,         
                    userGroupId: user.UserGroupId,    
                    departmentId: user.DepartmentId,
                    department: {        
                        DepartmentName: user.Department.DepartmentName
                    },
                    genderId: user.GenderId,
                    gender: {        
                        GenderName: user.Gender.GenderName
                    },
                    designationInCollege:  user.DesignationInCollege,
                    qualification: user.Qualification,
                    experienceInYears: user.ExperienceInYears,
                    experienceInMonths: user.ExperienceInMonths
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

    signUp(register : Register): Observable<any>{
        return this.http.post<any>(environment.API_URL + '/registration/SignUp',
        JSON.stringify(
            { 
                firstName: register.FirstName,
                lastName: register.LastName,
                email: register.Email,
                phone: register.Phone,          
                password: register.Password,          
                confirmPassword: register.ConfirmPassword,          
                userType: register.UserType                
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

    otpVerification(userId: number,isEmailVerified: boolean, isPhoneVerified: boolean): Observable<any>{
       
        const params = new HttpParams()
        .append('UserId', userId)
        .append('IsEmailVerified', isEmailVerified)
        .append('IsPhoneVerified', isPhoneVerified);     

        const options = {
            params: params
        };

        return this.http.put<any>(environment.API_URL + '/registration/OTPVerification', null, options )
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