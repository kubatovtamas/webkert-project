import {Component, OnInit, ViewChild} from '@angular/core';
import { Appointment } from '../shared/models/appointment-model';
import {MatTable} from '@angular/material/table';
import {AppointmentsService} from '../shared/appointments.service';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.css']
})
export class ListAppointmentsComponent implements OnInit {
  appointmentList;

  constructor(private appointmentsService: AppointmentsService) { }

  displayedColumns: string[] = [
    'status',
    'appointmentType',
    'priority',
    'start',
    'duration',
    'buttons'
  ];

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.appointmentList = this.appointmentsService.get('appointments');
    console.log(this.appointmentList);
  }

  delete(appointment): void {
    const idx = this.appointmentList.indexOf(appointment);
    this.appointmentList.splice(idx, 1);
    this.table.renderRows();
  }
}
