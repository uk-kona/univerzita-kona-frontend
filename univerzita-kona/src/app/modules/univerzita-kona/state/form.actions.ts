import { ContentType } from '../shared/constants/constants';
import { Action } from '@ngrx/store';

export enum FormActionTypes {
  changeContentType = '[Form] Change Content Type',
  resetState = '[Form] Reset',

  submitHelpRequestForm = '[Form] [Help request] Submit',
  submittedHelpRequestForm = '[Form] [Help request] Submitted',

  submitHelpWithActivityForm = '[Form] [Help with activity] Submit',
  submittedHelpWithActivityForm = '[Form] [Help with activity] Submitted',

  submitHelpFinanciallyForm = '[Form] [Help financially] Submit',
  submittedHelpFinanciallyForm = '[Form] [Help financially] Submitted',
}

export class ChangeContentType implements Action {
  readonly type = FormActionTypes.changeContentType;

  constructor(public payload: ContentType) {}
}

export class ResetState implements Action {
  readonly type = FormActionTypes.resetState;

  constructor() {}
}

export class SubmitHelpRequestForm implements Action {
  readonly type = FormActionTypes.submitHelpRequestForm;

  constructor() {}
}

export class SubmittedHelpRequestForm implements Action {
  readonly type = FormActionTypes.submittedHelpRequestForm;

  constructor() {}
}

export class SubmitHelpWithActivityForm implements Action {
  readonly type = FormActionTypes.submitHelpWithActivityForm;

  constructor() {}
}

export class SubmittedHelpWithActivityForm implements Action {
  readonly type = FormActionTypes.submittedHelpWithActivityForm;

  constructor() {}
}

export class SubmitHelpFinanciallyForm implements Action {
  readonly type = FormActionTypes.submitHelpFinanciallyForm;

  constructor() {}
}

export class SubmittedHelpFinanciallyForm implements Action {
  readonly type = FormActionTypes.submittedHelpFinanciallyForm;

  constructor() {}
}

export type FormActions = 
  ChangeContentType | 
  ResetState | 
  SubmitHelpRequestForm |
  SubmittedHelpRequestForm |
  SubmitHelpWithActivityForm |
  SubmittedHelpWithActivityForm |
  SubmitHelpFinanciallyForm |
  SubmittedHelpFinanciallyForm;
