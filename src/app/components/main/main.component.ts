import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/shared/models/medicine';
import { medicinesData } from '../../shared/medicines-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public medicines: Medicine[] = medicinesData;

  constructor() {}

  ngOnInit(): void {}
}
