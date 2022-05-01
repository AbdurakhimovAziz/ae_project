import { Injectable } from '@angular/core';
import { medicinesData } from '../medicines-data';
import { Medicine } from '../models/medicine';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  private medicines: Medicine[] = [];

  constructor() {
    this.setMedicines(medicinesData);
  }

  public getMedicines(): Medicine[] {
    return this.medicines;
  }

  private setMedicines(medicines: Medicine[]): void {
    this.medicines = medicines;
  }
}
