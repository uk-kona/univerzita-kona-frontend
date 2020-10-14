import { Skill } from './skill.model';
import { UKFaculty } from './uk-faculty.model';

export interface HelpWithActivityResponse {
  nameSurname: string;
  birthDate: string;
  faculty: UKFaculty;

  permanentStreetAddress: string;
  permanentZipCode: string;
  permanentCity: string;
  permanentCountry: string;

  activityCity: string;
  activityCountry: string;

  skills: Skill[];
  readyToHelpStartDate: string;
  readyToHelpEndDate: string;

  phoneNumber: string;
  email: string;

  hasProtectiveItems: boolean;
}
