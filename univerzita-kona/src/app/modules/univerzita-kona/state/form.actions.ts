import { ContentType } from '../shared/constants/constants';
import { Action } from '@ngrx/store';

export enum FormActionTypes {
  ChangeContentType = '[Form] Change Content Type',
  SetHelpRequestFormPhoneNumberValue = '[Form] Set - Help Request Form - Phone Number Value',
  ResetState = '[Form] Reset',
  ResetSelectedSkills = '[Form] [Help with activity] ResetSelected Skills'
}

export class ChangeContentType implements Action {
  readonly type = FormActionTypes.ChangeContentType;

  constructor(public payload: ContentType) {}
}

export class ResetState implements Action {
  readonly type = FormActionTypes.ResetState;

  constructor() {}
}

export class ResetSelectedSkills implements Action {
  readonly type = FormActionTypes.ResetSelectedSkills;

  constructor() {}
}

export class SetHelpRequestFormPhoneNumberValue implements Action {
  readonly type = FormActionTypes.SetHelpRequestFormPhoneNumberValue;

  constructor(public payload: any) {}
}

export type FormActions = ChangeContentType | SetHelpRequestFormPhoneNumberValue | ResetState | ResetSelectedSkills;
