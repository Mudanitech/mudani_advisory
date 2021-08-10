import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class Api {
    url = environment.url
    constructor(private http: HttpClient) { }

    post(url, data): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('mudanitoken') || ''
            })
        };
        return this.http.post<any>(this.url + url, data, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    formData(url, data): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content': 'multipart/form-data',
                'authorization': localStorage.getItem('mudanitoken') || ''
            })
        };
        return this.http.post<any>(this.url + url, data, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    get(url): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('mudanitoken') || ''
            })
        };
        return this.http.get<any>(this.url + url, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    delete(url): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('mudanitoken') || ''
            })
        };
        return this.http.delete<any>(this.url + url, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            console.log({ error })
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };
}