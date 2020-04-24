import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-help-financially',
  templateUrl: './help-financially.component.html',
  styleUrls: ['./help-financially.component.scss']
})
export class HelpFinanciallyComponent implements OnInit {

  helpFinanciallyForm: FormGroup;

  constructor() {
    this.createForm();
    this.listenToFormChange();
  }

  ngOnInit(): void {
  }

  private createForm(): void {
    this.helpFinanciallyForm = new FormGroup({
      areSpecialConditions: new FormControl(false),
      specialConditions: new FormControl('')
    });
  }

  private listenToFormChange(): void {
    this.helpFinanciallyForm.controls.areSpecialConditions.valueChanges.subscribe((value: boolean) => {
      if (value) {
        this.helpFinanciallyForm.controls.specialConditions.setValidators([Validators.required]);
        this.helpFinanciallyForm.controls.specialConditions.updateValueAndValidity();
      } else {
        this.helpFinanciallyForm.controls.specialConditions.setValidators([]);
        this.helpFinanciallyForm.controls.specialConditions.updateValueAndValidity();
      }
    });
  }

  onSubmit(): void {
    console.log('SUBMIT');
  }

}
