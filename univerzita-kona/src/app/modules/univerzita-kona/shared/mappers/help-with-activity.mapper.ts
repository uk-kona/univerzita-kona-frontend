import { Injectable } from '@angular/core';
import { HelpWithActivityFormValue } from '../../state/form.reducer';
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
}