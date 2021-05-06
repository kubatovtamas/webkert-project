import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Appointment} from '../shared/models/appointment-model';
import {ListAppointmentsComponent} from '../list-appointments/list-appointments.component';
import {AppointmentsService} from '../shared/appointments.service';
import {AngularFirestoreDocument} from '@angular/fire/firestore';

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

  appointment;
  participantList;

  constructor(private router: Router,
              private route: ActivatedRoute,
              public appointmentsService: AppointmentsService) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const id = (params.get('id') as string);

    this.appointmentsService.getById('appointments', id).ref.get().then((doc) => {
      if (doc.exists) {
        this.appointment = doc.data();

        this.participantList = this.appointment.participants;
      }
    });
  }

  save(): void {
    this.appointmentsService.update('appointments', this.appointment.id, {
        status: this.appointment.status
    });
    this.router.navigate(['list']);
  }
}
