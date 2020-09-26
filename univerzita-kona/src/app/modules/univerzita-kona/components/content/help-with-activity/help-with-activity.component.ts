import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { HelpWithActivityFormValue, State } from '../../../state/form.reducer';
import { Store } from '@ngrx/store';
import { MockedService } from '../../../services/mocked.serice';
import { HelpActivity } from '../../../models/help-activity.model';
import { UKFaculty } from '../../../models/uk-faculty.model';

@Component({
  selector: 'app-help-with-activity',
  templateUrl: './help-with-activity.component.html',
  styleUrls: ['./help-with-activity.component.scss']
})
export class HelpWithActivityComponent implements OnInit {

  formState$: Observable<FormGroupState<HelpWithActivityFormValue>>;
  skills$: Observable<HelpActivity[]>;
  faculties$: Observable<UKFaculty[]>;

  constructor(
    private store: Store<State>,
    private mockedService: MockedService,
  ) {}

  ngOnInit(): void {
    this.formState$ = this.store.select(s => s.forms.helpWithActivityForm);
    this.skills$ = this.mockedService.getSkills();
    this.faculties$ = this.mockedService.getFaculties();
  }

  onSubmit(): void {
    console.log('SUBMIT');
  }

}
