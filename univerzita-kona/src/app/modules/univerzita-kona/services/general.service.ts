import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { PaymentResource } from '../models/payment-resource.model';
import { Observable } from 'rxjs';
import { WantToHelpResource } from '../models/want-to-help-resource.model';
import { NeedHelpResource } from '../models/need-help-resource.model';

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
}