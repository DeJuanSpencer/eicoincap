import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ClientSideRowModelModule,
  CsvExportModule,
  Module,
} from 'ag-grid-community';

@Component({
  selector: 'app-table',
  imports: [AgGridAngular],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  modules: Module[] = [ClientSideRowModelModule, CsvExportModule];
}
