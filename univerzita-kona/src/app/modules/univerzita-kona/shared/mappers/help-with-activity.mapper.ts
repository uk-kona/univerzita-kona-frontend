import { Injectable } from '@angular/core';
import { HelpRequestFormValue, HelpWithActivityFormValue } from '../../state/form.reducer';
import { HelpRequestResponse } from '../models/help-request-response.model';
import { HelpWithActivityResponse } from '../models/help-with-activity-response.model';

@Injectable()
export class HelpWithActivityMapper {

    public mapToResponse(input: HelpWithActivityFormValue): HelpWithActivityResponse {
        return {
            nameSurname: input.nameSurname,
            birthDate: input.birthDate,
            faculty: input.faculty.value,

            permanentStreetAddress: input.permanentStreetAddress,
            permanentZipCode: input.permanentZipCode,
            permanentCity: input.permanentCity,
            permanentCountry: input.permanentCountry,

            activityCity: input.activityCity,
            activityCountry: input.activityCountry,

            skills: input.skills.value,
            readyToHelpStartDate: input.readyToHelpStartDate,
            readyToHelpEndDate: input.readyToHelpEndDate,

            phoneNumber: input.phoneNumber,
            email: input.email,

            hasProtectiveItems: input.hasProtectiveItems,
        } as HelpWithActivityResponse;
    }

    public mapToHelpRequestResponse(input: HelpRequestFormValue): HelpRequestResponse {
        return {
            nameSurname: input.nameSurname,
            email: input.email,
            phoneNumber: input.phoneNumber,
            residentialStreetAddress: input.residentialStreetAddress,
            residentialZipCode: input.residentialZipCode,
            residentialCity: input.residentialCity,
            residentialCountry: input.residentialCountry,
            helpActivity: input.helpActivity.value,
        } as HelpRequestResponse;
    }
}