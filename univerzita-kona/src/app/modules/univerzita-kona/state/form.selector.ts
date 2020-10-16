import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormState } from './form.reducer';

export const formsFeatureName = 'forms';

const getFormFeatureName = createFeatureSelector<FormState>(formsFeatureName);

export const getContentType = createSelector(
  getFormFeatureName,
  state => state.contentType,
);

export const getHelpWithActivityForm = createSelector(
  getFormFeatureName,
  state => state.helpWithActivityForm.value);
