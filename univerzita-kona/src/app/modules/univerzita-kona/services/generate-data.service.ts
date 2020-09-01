import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { PaymentResource } from '../models/payment-resource.model';
import { Observable } from 'rxjs';

const BASE_URL = 'http://127.0.0.1:5000/api/v1';

@Injectable()
export class GenerateDataService {
    constructor(
        private httpClient: HttpClient
    ) {}

    getGeneratedData(): Observable<PaymentResource> {
        return this.httpClient.get<PaymentResource>(`${BASE_URL}/payment`);
    }
}