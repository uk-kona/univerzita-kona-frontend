import { ContentType } from '../shared/constants/constants';
import * as fromRoot from '../../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormActions, FormActionTypes } from './form.actions';

export const formsFeatureName = 'forms';

export interface State extends fromRoot.AppState {
  forms: FormState;
}

export interface FormState {
  contentType: ContentType;
}

const initialState: FormState = {
  contentType: 'INTRO'
};

const getFormFeatureState = createFeatureSelector<FormState>(formsFeatureName);

export const getContentType = createSelector(
  getFormFeatureState,
  state => state.contentType
);

export function formReducer(state: FormState = initialState, action: FormActions) {

  switch (action.type) {
    case FormActionTypes.ChangeContentType:
      return {
        ...state,
        contentType: action.payload
      };

    default:
      return state;
  }
}
