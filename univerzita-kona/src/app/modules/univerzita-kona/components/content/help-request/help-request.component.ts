import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { IntTelInputSetup } from '../../../shared/models/int-tel-input-setup.model';

@Component({
  selector: 'app-help-request',
  templateUrl: './help-request.component.html',
  styleUrls: ['./help-request.component.scss']
})
export class HelpRequestComponent implements OnInit {

  helpRequestForm: FormGroup;

  intTelInputSetup = new IntTelInputSetup();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.addDropdownPhoneNumberForm();
    // this.addSimlePhoneNumberForm(); /* backup simple phone number input */
  }

  private createForm(): void {
    this.helpRequestForm = this.formBuilder.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')
        ])
      ],
    });
  }

  private addDropdownPhoneNumberForm(): void {
    this.helpRequestForm.addControl(
      'phoneNumber',
      new FormControl('', Validators.required)
    );
  }

  private addSimlePhoneNumberForm(): void {
    this.helpRequestForm.addControl(
      'phoneNumberBackup',
      new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[\+]?[0-9]*$'),
        ])
      )
    );
  }

  onSubmit(): void {
    console.log('SUBMIT');
    console.log(this.helpRequestForm);
  }

}
