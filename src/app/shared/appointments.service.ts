import { Injectable } from '@angular/core';
import {Appointment} from './models/appointment-model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
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

  getAppointmentById(id: string): Appointment {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.mockAppointments.length; i++) {
      if (this.mockAppointments[i].identifier === id) { return this.mockAppointments[i]; }
    }
    return null;
  }

  constructor() { }
}
