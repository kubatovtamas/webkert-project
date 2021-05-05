import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';
import { RouterModule, Routes } from '@angular/router';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { Appointment } from './shared/models/appointment-model';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListAppointmentsComponent },
  { path: 'add', component: AddAppointmentComponent },
  { path: 'edit/:id', component: EditAppointmentComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddAppointmentComponent,
    ListAppointmentsComponent,
    EditAppointmentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialComponentsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
