import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { HelpFinanciallyFormValue, State } from '../../../state/form.reducer';
import { GenerateDataService } from '../../../services/generate-data.service';
import { PaymentResource } from '../../../models/payment-resource.model';

@Component({
  selector: 'app-help-financially',
  templateUrl: './help-financially.component.html',
  styleUrls: ['./help-financially.component.scss']
})
export class HelpFinanciallyComponent {

  formState$: Observable<FormGroupState<HelpFinanciallyFormValue>>;
  response$: Observable<PaymentResource>;

  constructor(
    private store: Store<State>,
    private generateDataService: GenerateDataService,
  ) {
    this.formState$ = this.store.select(s => s.forms.helpFinanciallyForm);
  }

  onSubmit(): void {
    console.log('SUBMIT');
  }

  generatePaymentData(): void {
    this.response$ = this.generateDataService.getGeneratedData();
  }

}
