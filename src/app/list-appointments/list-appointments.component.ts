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
  mockAppointments = this.appointmentsService.mockAppointments;

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
  }

  delete(appointment): void {
    const idx = this.mockAppointments.indexOf(appointment);
    this.mockAppointments.splice(idx, 1);
    this.table.renderRows();
  }
}
