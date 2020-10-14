import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { HelpWIthActivityMapper as HelpWithActivityMapper } from '../shared/mappers/help-with-activity.mapper';
import { HelpWithActivityResponse } from '../shared/models/help-with-activity-response.model';
import { GeneralService } from '../shared/services/general.service';
import { FormActionTypes } from './form.actions';
import { HelpWithActivityFormValue, State } from './form.reducer';
import * as fromFormSelector from './form.selector';

@Injectable()
export class FormEffect {

    @Effect()
    submitHelpWithActivityForm$ = this.actions$.pipe(
        ofType(FormActionTypes.submitHelpWithActivityForm),
        withLatestFrom(
            this.store.select(fromFormSelector.getHelpWithActivityForm),
            (_, data: FormGroupState<HelpWithActivityFormValue>) => data,
        ),
        map((data: FormGroupState<HelpWithActivityFormValue>) => data.value),
        map((data: HelpWithActivityFormValue) => this.helpWithActivityMapper.mapToResponse(data)),
        tap((response: HelpWithActivityResponse): void => {
            this.generalService.postHelpWithActivityResponse(response);
        })
    );

    constructor(
        private actions$: Actions,
        private store: Store<State>,
        private generalService: GeneralService,
        private helpWithActivityMapper: HelpWithActivityMapper,
    ) {}
}