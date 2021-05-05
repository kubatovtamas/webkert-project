import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';
import { RouterModule, Routes } from '@angular/router';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { Appointment } from './shared/models/appointment-model';
import {DialogDataExampleDialogComponent} from './add-appointment/dialog-data-example-dialog.component';
import {FormsModule} from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {SummaryPipe} from './shared/summary.pipe';
import {AppointmentsService} from './shared/appointments.service';


const routes: Routes = [
  { path: 'list', component: ListAppointmentsComponent },
  { path: 'add', component: AddAppointmentComponent },
  { path: 'edit/:id', component: EditAppointmentComponent },
  { path: '**', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AddAppointmentComponent,
    ListAppointmentsComponent,
    EditAppointmentComponent,
    DialogDataExampleDialogComponent,
    ToolbarComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialComponentsModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [AppointmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
