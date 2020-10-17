import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HelpWithActivityFormValue, HelpRequestFormValue, State } from '../../state/form.reducer';
import { getHelpWithActivityForm, getHelpRequestForm } from '../../state/form.selector';

@Injectable()
export class FormStoreFacadeService {

    constructor(private store$: Store<State>) {}

    public get formValue() {
        return {
            getHelpRequestFormValue$: ((): Observable<HelpRequestFormValue> => 
                this.store$.select(
                    getHelpRequestForm
                )
            )(),
            getHelpWithActivityFormValue$: ((): Observable<HelpWithActivityFormValue> => 
                this.store$.select(
                    getHelpWithActivityForm
                )
            )(),
        };
    }
}
