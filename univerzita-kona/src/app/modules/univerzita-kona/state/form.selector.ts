import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormState } from './form.reducer';

export const formsFeatureName = 'forms';

const getFormFeatureName = createFeatureSelector<FormState>(formsFeatureName);

export const getContentType = createSelector(
  getFormFeatureName,
  state => state.contentType,
);

export const getHelpRequestForm = createSelector(
  getFormFeatureName,
  state => state.helpRequestForm.value
);

export const getHelpWithActivityForm = createSelector(
  getFormFeatureName,
  state => state.helpWithActivityForm.value
);

export const getHelpFinanciallyForm = createSelector(
  getFormFeatureName,
  state => state.helpFinanciallyForm.value
);
