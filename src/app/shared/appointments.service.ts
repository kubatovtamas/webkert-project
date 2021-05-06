import {Injectable} from '@angular/core';
import {Appointment} from './models/appointment-model';
import {AngularFirestore, AngularFirestoreDocument, CollectionReference, Query} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  appointmentStatusOptions = ['proposed', 'pending', 'booked', 'arrived', 'fulfilled', 'cancelled', 'no-show', 'entered-in-error', 'checked-in', 'wait-list'];
  appointmentTypeOptions = ['check-up', 'emergency', 'follow-up', 'routine', 'walk-in'];

  participantStatusOptions = ['accepted', 'declined', 'tentative', 'needs-action'];
  participantActorOptions = ['patient', 'practitioner', 'practitioner-role', 'related-person', 'device', 'healthcare-service', 'location'];
  participantRequiredOptions = ['required', 'optional', 'information-only'];

  constructor(private afs: AngularFirestore) { }

  async add(collectionName: string, data: Appointment, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    // await this.afs.collection(collectionName).add(data);
    return uid;
  }

  get(collectionName: string): Observable<any[]> {
    return this.afs.collection(collectionName, ref  => {
      const query: CollectionReference | Query = ref;
      // query = query.orderBy('title', 'asc');
      return query;
    }).valueChanges() as Observable<any[]>;
  }

  getById(collectionName: string, id: string): AngularFirestoreDocument<unknown> {
    return this.afs.collection(collectionName).doc(id);
  }

  async update(collectionName: string, id: string, data: any): Promise<string> {
    await this.afs.collection(collectionName).doc(id).update(data);  // data: egy objektum rész amire updatelni akarunk
    return id;
  }

  async delete(collectionName: string, id: string): Promise<string> {
    await this.afs.collection(collectionName).doc(id).delete();
    return id;
  }
}
