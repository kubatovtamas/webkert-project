import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormGroup, FormControl, Validators, AbstractControl, FormArray, FormBuilder} from '@angular/forms';
import {Participant} from '../shared/models/appointment-model';
import {AppointmentsService} from '../shared/appointments.service';

@Component({
  selector: 'app-dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class DialogDataExampleDialogComponent {
  // participantStatusOptions = [
  //   'accepted', 'declined', 'tentative', 'needs-action'
  // ];
  //
  // participantActorOptions = [
  //   'patient', 'practitioner', 'practitioner-role', 'related-person', 'device', 'healthcare-service', 'location'
  // ];
  //
  // participantRequiredOptions = [
  //   'required', 'optional', 'information-only'
  // ];

  constructor(public dialogRef: MatDialogRef<DialogDataExampleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Participant,
              public appointmentService: AppointmentsService) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
}
