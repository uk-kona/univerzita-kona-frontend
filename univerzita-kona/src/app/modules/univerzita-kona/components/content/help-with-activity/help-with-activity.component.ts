import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddArrayControlAction, FormGroupState } from 'ngrx-forms';
import { HelpWithActivityFormValue, State } from '../../../state/form.reducer';
import { Store } from '@ngrx/store';
import { MockedService } from '../../../services/mocked.serice';
import { UKFaculty } from '../../../models/uk-faculty.model';
import { Skill } from '../../../models/skill.model';
import { map, take, withLatestFrom } from 'rxjs/operators';
import { ResetSelectedSkills } from '../../../state/form.actions';

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
  ) {}

  ngOnInit(): void {
    this.formState$ = this.store.select(s => s.forms.helpWithActivityForm);
    this.skills$ = this.mockedService.getSkills();
    // this.store.dispatch(new ResetSelectedSkills());
    // this.skills$
    // .pipe(
    //   withLatestFrom(this.formState$),
    //   map(([newSkills, state]) => {
    //     newSkills.forEach((newSkill, index) => {

    //     }
    //   }))
    // )
    
    // .
    // this.skills$.subscribe((skills: Skill[]) => {
    //   skills.forEach((newSkill, index) => {
    //     const existingSkill = this.formState$.
    //     this.formState$
    //       .pipe(
    //         take(1),
    //         map(state => state.controls.skills.id),
    //         map(id => new AddArrayControlAction(id, false, index)),
    //       ).subscribe(this.store)
    //   })
      
    // })
    this.faculties$ = this.mockedService.getFaculties();
  }

  onSubmit(): void {
    console.log('SUBMIT');
  }

}
