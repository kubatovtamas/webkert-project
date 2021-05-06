export interface Appointment {
  status: AppointmentStatus;
  participants: Participant[];
  id?: string;
  appointmentType?: AppointmentType;
  priority?: number;
  description?: string;
  start?: Date;
  duration?: number;
}

export type AppointmentStatus = 'proposed' | 'pending' | 'booked' | 'arrived' | 'fulfilled' | 'cancelled' | 'no-show' | 'entered-in-error' | 'checked-in' | 'wait-list';
export type AppointmentType = 'check-up' | 'emergency' | 'follow-up' | 'routine' | 'walk-in';

export interface Participant {
  status: ParticipantStatus;
  actor?: ParticipantActor;
  required?: ParticipantRequired;
}

export type ParticipantStatus = 'accepted' | 'declined' | 'tentative' | 'needs-action';
export type ParticipantActor = 'patient' | 'practitioner' | 'practitioner-role' | 'related-person' | 'device' | 'healthcare-service' | 'location';
export type ParticipantRequired = 'required' | 'optional' | 'information-only';
