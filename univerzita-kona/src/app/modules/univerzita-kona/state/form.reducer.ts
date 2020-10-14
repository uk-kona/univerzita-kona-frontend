import { ContentType } from '../shared/constants/constants';
import * as fromRoot from '../../../state/app.state';
import { FormActions, FormActionTypes } from './form.actions';
import { createFormGroupState, FormGroupState, formGroupReducer, updateGroup, validate, Boxed, box } from 'ngrx-forms';
import { required, pattern, number, equalTo } from 'ngrx-forms/validation';
import { Validators } from '@angular/forms';
import { HelpActivity } from '../shared/models/help-activity.model';
import { Skill } from '../shared/models/skill.model';
import { UKFaculty } from '../shared/models/uk-faculty.model';

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
  faculty: Boxed<UKFaculty>;

  permanentStreetAddress: string;
  permanentZipCode: string;
  permanentCity: string;
  permanentCountry: string;

  activityCity: string;
  activityCountry: string;

  skills: Boxed<Skill[]>;
  readyToHelpStartDate: string;
  readyToHelpEndDate: string;

  phoneNumber: string;
  email: string;

  hasProtectiveItems: boolean;
}

const validateHelpWithActivityForm = updateGroup<HelpWithActivityFormValue>({
  nameSurname: validate(required),
  birthDate: validate(required),
  faculty: validate(required),

  permanentStreetAddress: validate(required),
  permanentZipCode: validate(required),
  permanentCity: validate(required),
  permanentCountry: validate(required),

  activityCity: validate(required),
  activityCountry: validate(required),

  skills: validate(required),
  readyToHelpStartDate: validate(required),
  readyToHelpEndDate: validate(required),

  email: validate(required, pattern(RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'))),
  phoneNumber: validate(required, pattern(RegExp('^\\+?[0-9 ]+$'))),

  hasProtectiveItems: validate(required, equalTo(true)),
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

    skills: box([]),
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
    case FormActionTypes.changeContentType:
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

    case FormActionTypes.resetState:
      return Object.assign({}, initialState);

    default:
      return state;
  }
}
