import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams} from '@angular/common/http';
import { LoginDetails } from '../_models';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { EncrDecrService } from '../_services/index';

export interface Credentials {
    user: LoginDetails;
    userID: string;
    isAccountSetupDone: boolean;
}

const credentialsKey = 'credentials';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    private _credentials: Credentials | null | undefined;

    constructor(private http: HttpClient,
                private encrdecrService: EncrDecrService) {
        const savedCredentials = sessionStorage.getItem('credentials') || localStorage.getItem('credentials');
        if (savedCredentials) {
            this._credentials = JSON.parse(savedCredentials);
        }
    }

    logout(): Observable<boolean> {
        this.setCredentials();
        return of(true);
    }

    login(context: LoginDetails): Observable<any> {
        return this.http.post<any>(environment.API_URL + '/Auth/Authenticate',
            JSON.stringify({ email: context.Email, password: context.Password }))
            .pipe(map(res => {
                if (res && res.successCode == "1") {
                    console.log(res);
                    const credentials = {
                        userID: this.encrdecrService.set(res.userID),
                        isAccountSetupDone: res.isAccountSetupDone,
                        user: {
                            Email: context.Email,
                            Password: this.encrdecrService.set(context.Password)
                        }
                    };
                    this.setCredentials(credentials);
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

    resetPassword(emailId: string): Observable<any>{       
        const params = new HttpParams()
        .append('EmailId', emailId);     

        const options = {
            params: params
        };

        return this.http.post<any>(environment.API_URL + '/registration/ResetPassword', null, options )
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

    authenticateResetPassword(userId: number, token: string): Observable<any>{ 
        return this.http.post<any>(environment.API_URL + '/Auth/AuthenticateResetPassword', 
        JSON.stringify({ userId: userId, token: token }))
        .pipe(map(res => {
                console.log(res);                    
                return res;
        }))
        .pipe(catchError(e => {            
            return of(e);
        }));
    }

    changePassword(userId: number, password: string): Observable<any>{               
        return this.http.post<any>(environment.API_URL + '/registration/UpdatePassword', 
        JSON.stringify({ userId: userId, password: password}))
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

    private setCredentials(credentials?: Credentials) {
        this._credentials = credentials || null;
        if (credentials) {
            const storage = localStorage;
            storage.setItem(credentialsKey, JSON.stringify(credentials));
            sessionStorage.setItem(credentialsKey, JSON.stringify(credentials));
        }
        else {
            sessionStorage.removeItem(credentialsKey);
            localStorage.removeItem(credentialsKey);
        }
    }

    public isAuthenticated(): boolean {
        return !!this._credentials;
    }

    public getloggedInUser() {
        return (this._credentials) ? this._credentials.user : null;
    }

}
