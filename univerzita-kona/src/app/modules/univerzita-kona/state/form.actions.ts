import { ContentType } from '../shared/constants/constants';
import { Action } from '@ngrx/store';

export enum FormActionTypes {
  ChangeContentType = '[Form] Change Content Type',
}

export class ChangeContentType implements Action {
  readonly type = FormActionTypes.ChangeContentType;

  constructor(public payload: ContentType) {}
}

export type FormActions = ChangeContentType;
