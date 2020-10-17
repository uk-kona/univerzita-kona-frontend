import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { HelpWithActivityResponse } from '../models/help-with-activity-response.model';
import { PaymentResource } from '../models/payment-resource.model';
import { Faculty } from '../models/faculty.model';
import { Activity } from '../models/activity.model';
import { Skill } from '../models/skill.model';
import { HelpRequestResponse } from '../models/help-request-response.model';
import camelize from 'camelize';
import snakeize from 'snakeize';
import { map } from 'rxjs/operators';

const BASE_URL = 'http://127.0.0.1:5000/api/v1';

@Injectable()
export class GeneralHttpService {
    constructor(
        private httpClient: HttpClient
    ) {}

    getFacultyResource(): Observable<Faculty[]> {
        return this.httpClient.get<Faculty[]>(`${BASE_URL}/faculties`)
            .pipe(
                map((d) => camelize(d)),
            );
    }

    getActivityResource(): Observable<Activity[]> {
        return this.httpClient.get<Activity[]>(`${BASE_URL}/activities`)
            .pipe(
                map((d) => camelize(d)),
            );
    }

    getSkillsResource(): Observable<Skill[]> {
        return this.httpClient.get<Skill[]>(`${BASE_URL}/skills`)
            .pipe(
                map((d) => camelize(d)),
            );
    }

    getPaymentResource(): Observable<PaymentResource> {
        return this.httpClient.get<PaymentResource>(`${BASE_URL}/help-financially`)
            .pipe(
                map((d) => camelize(d)),
            );
    }

    postHelpRequestResponse(response: HelpRequestResponse): Observable<Response> {
        return this.httpClient.post<Response>(`${BASE_URL}/need-help`, snakeize(response));
    }

    postHelpWithActivityResponse(response: HelpWithActivityResponse): Observable<Response> {
        return this.httpClient.post<Response>(`${BASE_URL}/help-with-activity`, snakeize(response));
    }

    getHelpFinanciallyResource(): Observable<any> {
        return EMPTY;
        // TODO implement
    }

    postHelpFinanciallyResource(response: any): Observable<any> {
        return EMPTY;
        // TODO implement
    }

    
}