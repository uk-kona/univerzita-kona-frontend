import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { map, take } from 'rxjs/operators';
import { HelpWithActivityResponse } from '../models/help-with-activity-response.model';
import { NeedHelpResource } from '../models/need-help-resource.model';
import { PaymentResource } from '../models/payment-resource.model';
import { WantToHelpResource } from '../models/want-to-help-resource.model';

const BASE_URL = 'http://127.0.0.1:5000/api/v1';

@Injectable()
export class GeneralService {
    constructor(
        private httpClient: HttpClient
    ) {}

    getPaymentResource(): Observable<PaymentResource> {
        return this.httpClient.get<PaymentResource>(`${BASE_URL}/payment`);
    }

    getWantToHelpResource(): Observable<WantToHelpResource> {
        return this.httpClient.get<PaymentResource>(`${BASE_URL}/want-to-help`);
    }

    getNeedHelpResource(): Observable<NeedHelpResource> {
        return this.httpClient.get<PaymentResource>(`${BASE_URL}/need-help`);
    }

    postHelpWithActivityResponse(response: HelpWithActivityResponse) {
        return this.httpClient.post<HelpWithActivityResponse>(`${BASE_URL}/help-with-activity`, response);
    }
}