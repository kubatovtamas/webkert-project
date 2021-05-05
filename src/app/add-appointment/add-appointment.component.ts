import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogDataExampleDialogComponent} from './dialog-data-example-dialog.component';
import {Participant} from '../shared/models/appointment-model';
import {MatTable} from '@angular/material/table';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  appointmentStatusOptions = ['proposed', 'pending', 'booked', 'arrived', 'fulfilled', 'cancelled', 'no-show', 'entered-in-error', 'checked-in', 'wait-list'];

  appointmentTypeOptions = ['check-up', 'emergency', 'follow-up', 'routine', 'walk-in'];

  participants: Participant[] = [
    {status: 'needs-action', actor: 'patient', required: 'required'},
    {status: 'accepted', actor: 'practitioner', required: 'required'}
  ];

  displayedColumns: string[] = [
    'actor',
    'status',
    'required',
    'buttons'
  ];

  @ViewChild(MatTable) table: MatTable<any>;

  actor: 'patient' | 'practitioner' | 'practitioner-role' | 'related-person' | 'device' | 'healthcare-service' | 'location';
  required: 'required' | 'optional' | 'information-only';
  status: 'accepted' | 'declined' | 'tentative' | 'needs-action';

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
      const newAppointment = {
        actor: result.actor,
        required: result.required,
        status: result.status
      };

      this.participants.push(newAppointment);
      this.table.renderRows();
    });
  }

  delete(participant): void {
    const idx = this.participants.indexOf(participant);
    this.participants.splice(idx, 1);
    this.table.renderRows();
  }
}
