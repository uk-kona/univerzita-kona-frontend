import { Activity } from './activity.model';

export interface HelpRequestResponse {
    nameSurname: string;
    email: string;
    phoneNumber: string;
    residentialStreetAddress: string;
    residentialZipCode: string;
    residentialCity: string;
    residentialCountry: string;
    helpActivity: Activity;
}
