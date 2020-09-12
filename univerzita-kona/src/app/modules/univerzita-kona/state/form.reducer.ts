import { ContentType } from '../shared/constants/constants';
import * as fromRoot from '../../../state/app.state';
import { FormActions, FormActionTypes } from './form.actions';
import { createFormGroupState, FormGroupState, formGroupReducer, updateGroup, validate } from 'ngrx-forms';
import { required, pattern, number } from 'ngrx-forms/validation';
import { HelpActivity } from '../models/help-activity.model';
import { UKFaculty } from '../models/uk-faculty.model';

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

const HelpFinanciallyFormID = 'HelpFinanciallyForm';

const initialHelpFinanciallyFormState = createFormGroupState<HelpFinanciallyFormValue>(
  HelpFinanciallyFormID,
  {
    areSpecialConditions: false,
    specialConditions: ''
  }
);


export interface HelpWithActivityFormValue {
  nameSurname: string;
  birthDate: string;
  faculty: UKFaculty;

  permanentStreetAddress: string;
  permanentZipCode: string;
  permanentCity: string;
  permanentCountry: string;

  activityCity: string;
  activityCountry: string;

  helpActivity: HelpActivity;
  readyToHelpStartDate: string;
  readyToHelpEndDate: string;

  phoneNumber: string;
  email: string;

  hasProtectiveItems: boolean;
}

const validateHelpWithActivityForm = updateGroup<HelpWithActivityFormValue>({
  birthDate: validate(required),

  activityCity: validate(required),
  activityCountry: validate(required),

  readyToHelpStartDate: validate(required),
  readyToHelpEndDate: validate(required),

  email: validate(required, pattern(RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'))),
  phoneNumber: validate(required, pattern(RegExp('^\\+?[0-9 ]+$'))),
});

const HelpWithActivityFormID = 'HelpWithActivityForm';

const initialHelpWithActivityFormState = createFormGroupState<HelpWithActivityFormValue>(
  HelpWithActivityFormID,
  {
    nameSurname: '',
    birthDate: '',
    faculty: null,
    permanentStreetAddress: '',
    permanentZipCode: '',
    permanentCity: '',
    permanentCountry: '',

    activityCity: '',
    activityCountry: '',

    helpActivity: null,
    readyToHelpStartDate: '',
    readyToHelpEndDate: '',

    email: '',
    phoneNumber: '',

    hasProtectiveItems: false,
  }
)


export interface HelpRequestFormValue {
  nameSurname: string;
  email: string;
  phoneNumber: string;
  residentialStreetAddress: string;
  residentialZipCode: string;
  residentialCity: string;
  residentialCountry: string;
  helpActivity: HelpActivity;
}

const validateHelpRequestForm = updateGroup<HelpRequestFormValue>({
});

const HelpRequestFormID = 'HelpRequestForm';

const initialHelpRequestFormState = createFormGroupState<HelpRequestFormValue>(
  HelpRequestFormID,
  {
    nameSurname: '',
    email: '',
    phoneNumber: '',
    residentialStreetAddress: '',
    residentialZipCode: '',
    residentialCity: '',
    residentialCountry: '',
    helpActivity: null,
  }
);


export interface FormState {
  contentType: ContentType;
  helpFinanciallyForm: FormGroupState<HelpFinanciallyFormValue>;
  helpRequestForm: FormGroupState<HelpRequestFormValue>;
  helpWithActivityForm: FormGroupState<HelpWithActivityFormValue>;
}


const initialState: FormState = {
  contentType: 'INTRO',
  helpFinanciallyForm: initialHelpFinanciallyFormState,
  helpRequestForm: initialHelpRequestFormState,
  helpWithActivityForm: initialHelpWithActivityFormState,
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

  const helpWithActivityForm = validateHelpWithActivityForm(formGroupReducer(state.helpWithActivityForm, action));
  if (helpWithActivityForm !== state.helpWithActivityForm) {
    state = {
      ...state,
      helpWithActivityForm
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
