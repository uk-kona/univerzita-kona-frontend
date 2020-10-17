import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import { HelpWithActivityMapper } from '../shared/mappers/help-with-activity.mapper';
import { FormStoreFacadeService } from '../shared/services/form-store-facade.service';
import { FormActionTypes, SubmittedHelpFinanciallyForm, SubmittedHelpRequestForm, SubmittedHelpWithActivityForm } from './form.actions';
import { HelpFinanciallyFormValue, HelpRequestFormValue, HelpWithActivityFormValue } from './form.reducer';
import { ThrowTempAction } from './error.actions';
import { GeneralHttpService } from '../shared/services/general-http.service';
import { HelpRequestResponse } from '../shared/models/help-request-response.model';
import { HelpWithActivityResponse } from '../shared/models/help-with-activity-response.model';
import { HelpFinanciallyResponse } from '../shared/models/help-financially-response.model';

@Injectable()
export class FormEffects {

    // TODO refactor

    @Effect()
    submitHelpRequestForm$: Observable<Action> = this.actions$.pipe(
        ofType(FormActionTypes.submitHelpRequestForm),
        withLatestFrom(
            this.formStoreFacadeService.formValue.getHelpRequestFormValue$,
            (_, formValue: HelpRequestFormValue): HelpRequestFormValue => formValue,
        ),
        exhaustMap((formValue: HelpRequestFormValue) => {
            const response: HelpRequestResponse = this.helpWithActivityMapper.mapToHelpRequestResponse(formValue)
            return this.generalHttpService
                .postHelpRequestResponse(response)
                .pipe(
                    map(
                        () => new SubmittedHelpRequestForm(),
                        // TODO handle success
                    ),
                    catchError(
                        () => of(new ThrowTempAction()),
                        // TODO handle failure
                    )
                );
        })
    );

    @Effect()
    submitHelpWithActivityForm$: Observable<Action> = this.actions$.pipe(
        ofType(FormActionTypes.submitHelpWithActivityForm),
        withLatestFrom(
            this.formStoreFacadeService.formValue.getHelpWithActivityFormValue$,
            (_, formValue: HelpWithActivityFormValue): HelpWithActivityFormValue => formValue,
        ),
        exhaustMap((formValue: HelpWithActivityFormValue) => {
            const response: HelpWithActivityResponse = this.helpWithActivityMapper.mapToResponse(formValue)
            return this.generalHttpService
                .postHelpWithActivityResponse(response)
                .pipe(
                    map(
                        () => new SubmittedHelpWithActivityForm(),
                        // TODO handle success
                    ),
                    catchError(
                        () => of(new ThrowTempAction()),
                        // TODO handle failure
                    )
                );
        })
    );

    @Effect()
    submitHelpFinanciallyForm$: Observable<Action> = this.actions$.pipe(
        ofType(FormActionTypes.submitHelpFinanciallyForm),
        withLatestFrom(
            this.formStoreFacadeService.formValue.getHelpFinanciallyFormValue$,
            (_, formValue: HelpFinanciallyFormValue): HelpFinanciallyFormValue => formValue,
        ),
        exhaustMap((formValue: HelpFinanciallyFormValue) => {
            const response: HelpFinanciallyResponse = this.helpWithActivityMapper.mapToHelpFinanciallyResponse(formValue)
            return this.generalHttpService
                .postHelpFinanciallyResource(response)
                .pipe(
                    map(
                        () => new SubmittedHelpFinanciallyForm(),
                        // TODO handle success
                    ),
                    catchError(
                        () => of(new ThrowTempAction()),
                        // TODO handle failure
                    )
                );
        })
    );

    constructor(
        private actions$: Actions,
        private formStoreFacadeService: FormStoreFacadeService,
        private helpWithActivityMapper: HelpWithActivityMapper,
        private generalHttpService: GeneralHttpService,
    ) {}
}
