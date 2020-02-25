import { Component, OnInit } from '@angular/core';
import { Drug } from '../interfaces/drug.interface';
import { DrugStoreService } from '../services/drug-store.service';
import { UserStoreService } from '../services/user-store.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-drug-input',
  templateUrl: './drug-input.component.html',
  styleUrls: ['./drug-input.component.scss']
})
export class DrugInputComponent implements OnInit {
  floatLabelControl = new FormControl('auto');

  drugs: Drug[] = [];
  drugForm: FormGroup

  constructor(private drugStore: DrugStoreService, private userStore: UserStoreService, private fb: FormBuilder) { 
    floatLabel: this.floatLabelControl
  }

  addDrug(e){
e.preventDefault()
if(this.drugForm.valid){
  this.drugStore.addDrug(this.drugForm.value.drugName, this.drugForm.value.strength, this.drugForm.value.quantityPerDay, this.drugForm.value.quantityRemaining)
}
  }

  ngOnInit(): void {
  }

}
