import { Component, OnInit } from '@angular/core';
import { Drug } from '../interfaces/drug.interface';
import { DrugStoreService } from '../services/drug-store.service';
import { UserStoreService } from '../services/user-store.service';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-drug-input',
  templateUrl: './drug-input.component.html',
  styleUrls: ['./drug-input.component.scss']
})
export class DrugInputComponent implements OnInit {
  drugs: Drug[] = [];
  drugForm: FormGroup;

  constructor(private fb: FormBuilder, private drugStore: DrugStoreService, private userService: UserStoreService) {}

  ngOnInit() {
    this.drugForm = this.fb.group({
      drugs: this.fb.array([])
    });
  }


initiateForm(): FormGroup {
  return this.fb.group({
    drug: ['', Validators.required],
    quantityPerDay: ['', Validators.required],
    quantityRemaining: ['', Validators.required],
});
}

addDrug() {
  const control = <FormArray>this.drugForm.get('drugs');
  control.push(this.initiateForm());
}

remove(index: number) {
  const control = <FormArray>this.drugForm.get('drugs');
  control.removeAt(index);
}

save() {
  console.log(this.drugForm.value);
  
}

}