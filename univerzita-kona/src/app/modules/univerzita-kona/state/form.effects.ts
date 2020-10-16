import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import { HelpWithActivityMapper } from '../shared/mappers/help-with-activity.mapper';
import { FormStoreFacadeService } from '../shared/services/form-store-facade.service';
import { FormActionTypes, SubmittedHelpWithActivityForm } from './form.actions';
import { HelpWithActivityFormValue } from './form.reducer';
import { ThrowTempAction } from './error.actions';
import { GeneralHttpService } from '../shared/services/general-http.service';

@Injectable()
export class FormEffects {

    @Effect()
    submitHelpWithActivityForm$: Observable<Action> = this.actions$.pipe(
        ofType(FormActionTypes.submitHelpWithActivityForm),
        withLatestFrom(
            this.formStoreFacadeService.formValue.getHelpWithActivityFormValue$,
            (_, formValue: HelpWithActivityFormValue): HelpWithActivityFormValue => formValue,
        ),
        exhaustMap((formValue: HelpWithActivityFormValue) => {
            const response = this.helpWIthActivityMapper.mapToResponse(formValue)
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
                )
        })
    );

    constructor(
        private actions$: Actions,
        private formStoreFacadeService: FormStoreFacadeService,
        private helpWIthActivityMapper: HelpWithActivityMapper,
        private generalHttpService: GeneralHttpService,
    ) {}
}
