import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { HelpWithActivityFormValue, State } from '../../../state/form.reducer';
import { Store } from '@ngrx/store';
import { Skill } from '../../../shared/models/skill.model';
import { Faculty } from '../../../shared/models/faculty.model';
import { GeneralHttpService } from '../../../shared/services/general-http.service';
import { MockedService } from '../../../shared/services/mocked.serice';
import { HelpWithActivityMapper } from '../../../shared/mappers/help-with-activity.mapper';
import * as fromActions from '../../../state/form.actions';

@Component({
  selector: 'app-help-with-activity',
  templateUrl: './help-with-activity.component.html',
  styleUrls: ['./help-with-activity.component.scss']
})
export class HelpWithActivityComponent implements OnInit {

  formState$: Observable<FormGroupState<HelpWithActivityFormValue>>;
  skills$: Observable<Skill[]>;
  faculties$: Observable<Faculty[]>;

  constructor(
    private store: Store<State>,
    private mockedService: MockedService,
    private generalService: GeneralHttpService,
    private mapper: HelpWithActivityMapper,
  ) {}

  ngOnInit(): void {
    this.formState$ = this.store.select(s => s.forms.helpWithActivityForm);
    this.skills$ = this.mockedService.getSkills();
    this.faculties$ = this.mockedService.getFaculties();
  }

  onSubmit(): void {
    this.store.dispatch(new fromActions.SubmitHelpWithActivityForm());
  }

}
