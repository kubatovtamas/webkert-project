import {Component, DoCheck, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogDataExampleDialogComponent} from './dialog-data-example-dialog.component';
import {
  Appointment,
  AppointmentStatus, AppointmentType,
  Participant,
  ParticipantActor,
  ParticipantRequired,
  ParticipantStatus
} from '../shared/models/appointment-model';
import {MatTable} from '@angular/material/table';
import {AppointmentsService} from '../shared/appointments.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit, DoCheck {

  displayedColumns: string[] = [
    'actor',
    'status',
    'required',
    'buttons'
  ];

  @ViewChild(MatTable) table: MatTable<any>;

  // New Appointment:
  newAppointmentStatus: AppointmentStatus;
  newAppointmentType: AppointmentType;
  newAppointmentPriority = 5;
  newAppointmentDescription: string;
  newAppointmentStart: Date;
  newAppointmentDuration = 30;

  // New Participants List:
  participantActor: ParticipantActor;
  participantRequired: ParticipantRequired;
  participantStatus: ParticipantStatus;
  participantList: Participant[] = [];

  constructor(public dialog: MatDialog, public appointmentService: AppointmentsService, private router: Router) {}

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    // Debug log participants
    console.log('Participant list:', this.participantList);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDataExampleDialogComponent, {
      height: '50%',
      data: {
        actor: this.participantActor,
        required: this.participantRequired,
        status: this.participantStatus
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      const newParticipant: Participant = {
        actor: result?.actor,
        required: result?.required,
        status: result?.status
      };

      if (newParticipant.actor && newParticipant.required && newParticipant.status) {
        this.participantList.push(newParticipant);

        this.table.renderRows();
      }
    });
  }

  delete(participant): void {
    const idx = this.participantList.indexOf(participant);
    this.participantList.splice(idx, 1);
    this.table.renderRows();
  }

  submit(): void {
    const newAppointment: Appointment = {
      status: this.newAppointmentStatus,
      participants: this.participantList,
      appointmentType: this.newAppointmentType,
      priority: this.newAppointmentPriority,
      description: this.newAppointmentDescription,
      start: this.newAppointmentStart,
      duration: this.newAppointmentDuration
    };

    this.appointmentService.add('appointments', newAppointment);

    this.router.navigate(['list']);
  }
}
