import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { Medicine } from 'src/app/shared/models/medicine';
import { MedicineService } from 'src/app/shared/services/medicine.service';

@Component({
  selector: 'app-prescription-form',
  templateUrl: './prescription-form.component.html',
  styleUrls: ['./prescription-form.component.scss'],
})
export class PrescriptionFormComponent implements OnInit {
  public medicinesData: Medicine[] = [];
  public height: string = '200px';
  public medicineName = this.fb.control('');
  public filteredOptions!: Medicine[];
  public prescriptionForm!: FormGroup;

  constructor(
    private medicineService: MedicineService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.medicinesData = this.medicineService.getMedicines();
    this.medicineName.valueChanges
      .pipe(
        startWith(''),
        map((val) => {
          this.filteredOptions = val.length >= 2 ? this._filter(val) : [];
        })
      )
      .subscribe();

    this.prescriptionForm = this.fb.group({
      name: ['', Validators.required],
      doctorName: ['AAAA'],
      phone: ['', Validators.required],
      comments: [''],
      medicines: this.fb.array([]),
    });
  }

  private _filter(value: string): Medicine[] {
    const filterValue = value.toLowerCase();
    const filtered = this.medicinesData.filter((med: Medicine) =>
      med.tradeName.toLowerCase().includes(filterValue)
    );

    if (filtered.length < 4) {
      this.height = filtered.length * 50 + 'px';
    } else {
      this.height = '200px';
    }

    return filtered;
  }

  public addMedicineForm(): void {
    if (this.medicineName.value) {
      this.medicines.push(this.createMedicine(this.medicineName.value));
      this.medicineName.setValue('');
      console.log(this.prescriptionForm.value);
    }
  }

  public get medicines(): FormArray {
    return this.prescriptionForm.get('medicines') as FormArray;
  }

  private createMedicine(medName: string): FormGroup {
    return this.fb.group({
      medicineName: [medName],
      quantity: ['', Validators.required],
      duration: ['', Validators.required],
      frequency: ['', Validators.required],
      startDate: [''],
      endDate: [''],
    });
  }

  public removeMedicine(index: number): void {
    this.medicines.removeAt(index);
  }
}
