import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-drug-input',
  templateUrl: './drug-input.component.html',
  styleUrls: ['./drug-input.component.scss']
})
export class DrugInputComponent implements OnInit {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  minDate: Date;
  maxDate: Date;

  constructor(fb: FormBuilder) { 
// Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
this.options = fb.group({
  hideRequired: this.hideRequiredControl,
  floatLabel: this.floatLabelControl,});

const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }
  ngOnInit(): void {
  }

}
