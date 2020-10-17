import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { HelpFinanciallyFormValue, State } from '../../../state/form.reducer';
import { PaymentResource } from '../../../shared/models/payment-resource.model';
import * as fromActions from '../../../state/form.actions';

@Component({
  selector: 'app-help-financially',
  templateUrl: './help-financially.component.html',
  styleUrls: ['./help-financially.component.scss']
})
export class HelpFinanciallyComponent {

  formState$: Observable<FormGroupState<HelpFinanciallyFormValue>>;
  paymentData$: Observable<PaymentResource>;

  constructor(
    private store: Store<State>,
  ) {
    this.formState$ = this.store.select(s => s.forms.helpFinanciallyForm);
  }

  generatePaymentData(): void {
    this.store.dispatch(new fromActions.SubmitHelpFinanciallyForm());
  }

}
