import { ContentType } from '../shared/constants/constants';
import * as fromRoot from '../../../state/app.state';
import { FormActions, FormActionTypes } from './form.actions';
import { createFormGroupState, FormGroupState, formGroupReducer, updateGroup, validate } from 'ngrx-forms';
import { required, pattern } from 'ngrx-forms/validation';

export interface State extends fromRoot.AppState {
  forms: FormState;
}

export interface HelpFinanciallyFormValue {
  areSpecialConditions: boolean;
  specialConditions: string;
}

function validateHelpFinanciallyForm(formState: FormGroupState<HelpFinanciallyFormValue>) {
  return updateGroup(
    formState,
    {
      specialConditions: validate(formState.controls.areSpecialConditions.value ? required : () => ({}))
    }
  );
}

export interface HelpRequestFormValue {
  email: string;
  phoneNumber: string;
}

const validateHelpRequestForm = updateGroup<HelpRequestFormValue>({
  email: validate(required, pattern(RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'))),
  phoneNumber: validate(required),
});

export interface FormState {
  contentType: ContentType;
  helpFinanciallyForm: FormGroupState<HelpFinanciallyFormValue>;
  helpRequestForm: FormGroupState<HelpRequestFormValue>;
}

const HelpFinanciallyFormID = 'HelpFinanciallyForm';
const HelpRequestFormID = 'HelpRequestForm';

const initialHelpFinanciallyFormState = createFormGroupState<HelpFinanciallyFormValue>(
  HelpFinanciallyFormID,
  {
    areSpecialConditions: false,
    specialConditions: ''
  }
);

const initialHelpRequestFormState = createFormGroupState<HelpRequestFormValue>(
  HelpRequestFormID,
  {
    email: '',
    phoneNumber: '',
  }
);

const initialState: FormState = {
  contentType: 'INTRO',
  helpFinanciallyForm: initialHelpFinanciallyFormState,
  helpRequestForm: initialHelpRequestFormState,
};


// TODO use angular 9 approach

// export const formReducer = createReducer(
//   initialState,
//   onNgrxForms(),
//   // your other reducers...
// );


export function formReducer(state: FormState = initialState, action: FormActions) {

  const helpFinanciallyForm = validateHelpFinanciallyForm(formGroupReducer(state.helpFinanciallyForm, action));
  if (helpFinanciallyForm !== state.helpFinanciallyForm) {
    state = {
      ...state,
      helpFinanciallyForm
    };
  }
  const helpRequestForm = validateHelpRequestForm(formGroupReducer(state.helpRequestForm, action));
  if (helpRequestForm !== state.helpRequestForm) {
    state = {
      ...state,
      helpRequestForm
    };
  }

  switch (action.type) {
    case FormActionTypes.ChangeContentType:
      return {
        ...state,
        contentType: action.payload
      };

    // case FormActionTypes.SetHelpRequestFormPhoneNumberValue:
    // TODO complete phone number storing
    //   return {
    //     ...state,
    //     helpFinanciallyForm: { ... state.helpFinanciallyForm, phoneNumber: action.payload?.phoneNumber?.internationalNumber }
    //   };

    case FormActionTypes.ResetState:
      return Object.assign({}, initialState);

    default:
      return state;
  }
}
