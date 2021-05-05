import { Component, OnInit } from '@angular/core';
import { Appointment } from '../shared/models/appointment-model';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.css']
})
export class ListAppointmentsComponent implements OnInit {
  mockAppointments: Appointment[] = [
    {
      status: 'proposed',
      participants: [
        {status: 'needs-action', actor: 'patient', required: 'required'},
        {status: 'accepted', actor: 'practitioner', required: 'required'}
      ],
      identifier: '1',
      appointmentType: 'check-up',
      priority: 5,
      description: 'Testing description 123.',
      start: new Date(2021, 5, 5, 13, 30),
      duration: 30
    },
    {
      status: 'pending',
      participants: [
        {status: 'needs-action', actor: 'patient', required: 'required'},
        {status: 'accepted', actor: 'practitioner', required: 'required'},
        {status: 'needs-action', actor: 'related-person', required: 'optional'}
      ],
      identifier: '2',
      appointmentType: 'routine',
      priority: 8,
      description: 'Testing description 123.',
      start: new Date(2022, 5, 12, 6, 0),
      duration: 120
    },
    {
      status: 'booked',
      participants: [
        {status: 'needs-action', actor: 'patient', required: 'required'},
        {status: 'accepted', actor: 'practitioner', required: 'required'}
      ],
      identifier: '3',
      appointmentType: 'walk-in',
      priority: 3,
      description: 'Testing description 123.',
      start: new Date(2021, 5, 5, 10, 0),
      duration: 60
    }
  ];

  displayedColumns: string[] = [
    'status',
    'appointmentType',
    'priority',
    'start',
    'duration',
    'buttons'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
