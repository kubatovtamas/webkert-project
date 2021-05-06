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
import {DialogDataExampleDialogComponent} from './add-appointment/dialog-data-example-dialog.component';
import {FormsModule} from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {AppointmentsService} from './shared/appointments.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

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
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialComponentsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [AppointmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
