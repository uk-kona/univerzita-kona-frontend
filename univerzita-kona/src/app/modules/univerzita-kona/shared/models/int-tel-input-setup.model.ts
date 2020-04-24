import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

export class IntTelInputSetup {
  preferredCountries: CountryISO[] = [CountryISO.Slovakia, CountryISO.CzechRepublic];
  searchCountryField: SearchCountryField[] = [SearchCountryField.Iso2, SearchCountryField.Name];
  selectedCountryISO: CountryISO = CountryISO.Slovakia;
  tooltipField: TooltipLabel = TooltipLabel.Name;
}
