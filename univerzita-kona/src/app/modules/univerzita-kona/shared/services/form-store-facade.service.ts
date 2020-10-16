import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HelpWithActivityFormValue, State } from '../../state/form.reducer';
import { getHelpWithActivityForm } from '../../state/form.selector';

@Injectable()
export class FormStoreFacadeService {

    constructor(private store$: Store<State>) {}

    public get formValue() {
        return {
            getHelpWithActivityFormValue$: ((): Observable<HelpWithActivityFormValue> => 
                this.store$.select(
                    getHelpWithActivityForm
                )
            )(),
        };
    }
}
