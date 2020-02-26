import { Injectable } from '@angular/core';
import { Drug } from '../interfaces/drug.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrugStoreService {

  private readonly _drugs = new BehaviorSubject<Drug[]>([])

  constructor() { }

  readonly drugs$ = this._drugs.asObservable()

  private get drugs(): Drug[] {
    return this._drugs.getValue()
  }

  private set drugs(val: Drug[]) {
    this._drugs.next(val)
  }

  addDrug(dName: string, dStrength: string, qPerDay: number, qRemaining: number) {
    let newDrug: Drug = { drugName: dName, quantityPerDay: qPerDay, quantityRemaining: qRemaining, daysRemaining: (qRemaining / qPerDay) }
    this.drugs = [...this.drugs, newDrug];
  }

}
