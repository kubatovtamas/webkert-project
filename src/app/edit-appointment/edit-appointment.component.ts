import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Appointment} from '../shared/models/appointment-model';
import {ListAppointmentsComponent} from '../list-appointments/list-appointments.component';
import {AppointmentsService} from '../shared/appointments.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {
  displayedColumns: string[] = [
    'actor',
    'status',
    'required',
  ];

  appointmentStatusOptions = ['proposed', 'pending', 'booked', 'arrived', 'fulfilled', 'cancelled', 'no-show', 'entered-in-error', 'checked-in', 'wait-list'];

  appointment: Appointment;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private appointmentsService: AppointmentsService) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const id = (params.get('id') as string);
    this.appointment = this.appointmentsService.getAppointmentById(id);
    console.log(this.appointment);
  }

  save(): void {
    console.log(this.appointment);
  }
}
