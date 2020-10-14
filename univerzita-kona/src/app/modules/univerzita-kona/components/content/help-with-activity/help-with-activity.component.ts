import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { HelpWithActivityFormValue, State } from '../../../state/form.reducer';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { Skill } from '../../../shared/models/skill.model';
import { UKFaculty } from '../../../shared/models/uk-faculty.model';
import { GeneralService } from '../../../shared/services/general.service';
import { MockedService } from '../../../shared/services/mocked.serice';
import { HelpWIthActivityMapper } from '../../../shared/mappers/help-with-activity.mapper';
import { HelpWithActivityResponse } from '../../../shared/models/help-with-activity-response.model';
import * as fromActions from '../../../state/form.actions';

@Component({
  selector: 'app-help-with-activity',
  templateUrl: './help-with-activity.component.html',
  styleUrls: ['./help-with-activity.component.scss']
})
export class HelpWithActivityComponent implements OnInit {

  formState$: Observable<FormGroupState<HelpWithActivityFormValue>>;
  skills$: Observable<Skill[]>;
  faculties$: Observable<UKFaculty[]>;

  constructor(
    private store: Store<State>,
    private mockedService: MockedService,
    private generalService: GeneralService,
    private mapper: HelpWIthActivityMapper,
  ) {}

  ngOnInit(): void {
    this.formState$ = this.store.select(s => s.forms.helpWithActivityForm);
    this.skills$ = this.mockedService.getSkills();
    this.faculties$ = this.mockedService.getFaculties();
  }

  onSubmit(): void {
    this.store.dispatch(new fromActions.SubmitHelpWithActivityForm());
    this.formState$
      .pipe(
          take(1),
          map((data: FormGroupState<HelpWithActivityFormValue>) => data.value),
          map((data: HelpWithActivityFormValue) => this.mapper.mapToResponse(data))
      )
      .subscribe((data: HelpWithActivityResponse) => {
        this.generalService.postHelpWithActivityResponse(data);
      })
  }

}
