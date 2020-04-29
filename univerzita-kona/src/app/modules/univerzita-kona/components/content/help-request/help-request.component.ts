import { Component, OnInit } from '@angular/core';
import { IntTelInputSetup } from '../../../shared/models/int-tel-input-setup.model';
import { Store } from '@ngrx/store';
import { HelpRequestFormValue, State } from '../../../state/form.reducer';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SetHelpRequestFormPhoneNumberValue } from '../../../state/form.actions';

@Component({
  selector: 'app-help-request',
  templateUrl: './help-request.component.html',
  styleUrls: ['./help-request.component.scss']
})
export class HelpRequestComponent implements OnInit {

  formState$: Observable<FormGroupState<HelpRequestFormValue>>;

  intTelInputSetup = new IntTelInputSetup();

  helpRequestForm: FormGroup;

  constructor(
    private store: Store<State>,
    private formBuilder: FormBuilder,
  ) {
    this.formState$ = this.store.select(s => s.forms.helpRequestForm);
  }

  // TODO | complete phone number form

  ngOnInit(): void {
    this.createForm();
    // this.helpRequestForm.valueChanges.subscribe(value => {
    //   console.log(value);
    //   this.store.dispatch(new SetHelpRequestFormPhoneNumberValue(value));
    // });
  }

  private createForm(): void {
    this.helpRequestForm = this.formBuilder.group({
      // phoneNumber: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log('SUBMIT');
  }

}
