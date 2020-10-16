import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HelpRequestFormValue, State } from '../../../state/form.reducer';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { Activity } from '../../../shared/models/activity.model';
import { MockedService } from '../../../shared/services/mocked.serice';

@Component({
  selector: 'app-help-request',
  templateUrl: './help-request.component.html',
  styleUrls: ['./help-request.component.scss']
})
export class HelpRequestComponent implements OnInit {

  formState$: Observable<FormGroupState<HelpRequestFormValue>>;
  helpActivities$: Observable<Activity[]>;

  constructor(
    private store: Store<State>,
    private mockedService: MockedService,
  ) {}

  ngOnInit(): void {
    this.formState$ = this.store.select(s => s.forms.helpRequestForm);
    this.helpActivities$ = this.mockedService.getHelpActivities();
  }

  onSubmit(): void {
    console.log('SUBMIT');
  }

}
