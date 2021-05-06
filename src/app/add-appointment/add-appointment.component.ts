import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogDataExampleDialogComponent} from './dialog-data-example-dialog.component';
import {Appointment, Participant, ParticipantActor, ParticipantRequired, ParticipantStatus} from '../shared/models/appointment-model';
import {MatTable} from '@angular/material/table';
import {AppointmentsService} from '../shared/appointments.service';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  displayedColumns: string[] = [
    'actor',
    'status',
    'required',
    'buttons'
  ];

  @ViewChild(MatTable) table: MatTable<any>;

  participantList: Participant[] = [];
  appointment: Appointment;

  actor: ParticipantActor;
  required: ParticipantRequired;
  status: ParticipantStatus;

  constructor(public dialog: MatDialog, public appointmentService: AppointmentsService) {}

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDataExampleDialogComponent, {
      height: '50%',
      data: {
        actor: this.actor,
        required: this.required,
        status: this.status
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      const newParticipant: Participant = {
        actor: result?.actor,
        required: result?.required,
        status: result?.status
      };

      if (newParticipant.actor && newParticipant.required && newParticipant.status) {
        // Add created Participant to firestore
        this.appointmentService.add('participants', newParticipant);

        // Push to local Participant List
        this.participantList.push(newParticipant);


        // Update Appointment to include new the participant's reference
        // const updatedParticipantList = this.appointment.participants;

        // const updatedParticipantList = this.participantList;
        // updatedParticipantList.push(newParticipant);
        // this.appointmentService.update('participants', this.appointment.id, {
        //   participants: updatedParticipantList
        // });

        this.table.renderRows();
      }
    });
  }

  delete(participant): void {
    /*
    Itt meg nem kell szerintem törölni db-ből, ottmarad leszarom XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd
     */
    const idx = this.participantList.indexOf(participant);
    this.participantList.splice(idx, 1);
    this.table.renderRows();
  }
}
