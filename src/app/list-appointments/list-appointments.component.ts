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
  displayedColumns: string[] = [
    'status',
    'appointmentType',
    'priority',
    'start',
    'duration',
    'buttons'
  ];

  appointmentList;

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private appointmentsService: AppointmentsService) { }

  ngOnInit(): void {
    const debugAppointment: Appointment = {
      status: 'proposed',
      participants: [],
      appointmentType: 'routine',
      priority: 8,
      description: 'kekw',
      start: new Date(2020, 3, 5, 12, 0),
      duration: 50
    };

    this.appointmentsService.get('appointments').subscribe(
      data => {
        this.appointmentList = data;
      }
    );

    this.appointmentsService.add('appointments', debugAppointment);
  }

  delete(id): void {
    this.appointmentsService.delete('appointments', id);
    this.table.renderRows();
  }
}
