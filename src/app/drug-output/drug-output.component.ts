import { Component, OnInit, Input } from '@angular/core';
import { Drug } from '../interfaces/drug.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-drug-output',
  templateUrl: './drug-output.component.html',
  styleUrls: ['./drug-output.component.scss']
})
export class DrugOutputComponent implements OnInit {
  displayedColumns: string[]
  @Input() drugs: Drug[];
  dataSource = new MatTableDataSource<Drug>();

  constructor() { }

  ngOnInit(): void {
  }

}
