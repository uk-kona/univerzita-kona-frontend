import { ContentType } from '../shared/constants/constants';
import { Action } from '@ngrx/store';

export enum FormActionTypes {
  changeContentType = '[Form] Change Content Type',
  resetState = '[Form] Reset',
  submitHelpWithActivityForm = '[Form] [Help with activity] Submit'
}

export class ChangeContentType implements Action {
  readonly type = FormActionTypes.changeContentType;

  constructor(public payload: ContentType) {}
}

export class ResetState implements Action {
  readonly type = FormActionTypes.resetState;

  constructor() {}
}

export class SubmitHelpWithActivityForm implements Action {
  readonly type = FormActionTypes.submitHelpWithActivityForm;

  constructor() {}
}

export type FormActions = 
  ChangeContentType | 
  ResetState | 
  SubmitHelpWithActivityForm;
