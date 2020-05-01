import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { HelpRequestFormValue, State } from '../../../state/form.reducer';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-help-request',
  templateUrl: './help-request.component.html',
  styleUrls: ['./help-request.component.scss']
})
export class HelpRequestComponent {

  formState$: Observable<FormGroupState<HelpRequestFormValue>>;

  constructor(
    private store: Store<State>,
  ) {
    this.formState$ = this.store.select(s => s.forms.helpRequestForm);
  }

  onSubmit(): void {
    console.log('SUBMIT');
  }

}
