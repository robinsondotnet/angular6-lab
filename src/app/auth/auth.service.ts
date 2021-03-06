import { Injectable, Inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User } from '../_models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BACKEND_URL } from '../_common/app.config';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {

    handleError<T>(message: string): any {
        console.log('Error' + message);
    }

    constructor(private http: HttpClient, @Inject(BACKEND_URL) private backendUrl: string) {

    }

     get isAuthenticated(): boolean {
        return localStorage.getItem('user') != null;
    }

    login(username: string, password: string): Observable<User> {

        const options = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

        const user: User = {username};

        return this.http.post(this.backendUrl + '/auth/login', { username, password}, options)
            .pipe(catchError(this.handleError<User>('login')))
            .pipe(map((res: any) => {
                user.token = res.token;
                return user;
            }));
    }

    getUser(): User | null {
        return JSON.parse(localStorage.getItem('user')) as User;
    }

    logout() {
        localStorage.removeItem('user');
    }
}
