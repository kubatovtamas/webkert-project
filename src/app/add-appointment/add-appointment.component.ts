import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogDataExampleDialogComponent} from './dialog-data-example-dialog.component';
import {Participant, ParticipantActor, ParticipantRequired, ParticipantStatus} from '../shared/models/appointment-model';
import {MatTable} from '@angular/material/table';


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

  appointmentStatusOptions = ['proposed', 'pending', 'booked', 'arrived', 'fulfilled', 'cancelled', 'no-show', 'entered-in-error', 'checked-in', 'wait-list'];
  appointmentTypeOptions = ['check-up', 'emergency', 'follow-up', 'routine', 'walk-in'];

  participants: Participant[] = [];

  actor: ParticipantActor;
  required: ParticipantRequired;
  status: ParticipantStatus;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDataExampleDialogComponent, {
      height: '50%',
      data: {
        actor: this.actor,
        required: this.required,
        status: this.status}
    });

    dialogRef.afterClosed().subscribe(result => {
      const newParticipant: Participant = {
        actor: result.actor,
        required: result.required,
        status: result.status
      };

      this.participants.push(newParticipant);
      this.table.renderRows();
    });
  }

  delete(participant): void {
    const idx = this.participants.indexOf(participant);
    this.participants.splice(idx, 1);
    this.table.renderRows();
  }
}
