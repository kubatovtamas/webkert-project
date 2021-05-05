export interface Appointment {
  status: 'proposed' | 'pending' | 'booked' | 'arrived' | 'fulfilled' | 'cancelled' | 'no-show' | 'entered-in-error' | 'checked-in' | 'wait-list';
  identifier?: string;
  appointmentType?: 'check-up' | 'emergency' | 'follow-up' | 'routine' | 'walk-in';
  priority?: number;
  description?: string;
  start?: Date;
  duration?: number;
  participants: Participant[];
}

export interface Participant {
  status: 'accepted' | 'declined' | 'tentative' | 'needs-action';
  actor?: 'patient' | 'practitioner' | 'practitioner-role' | 'related-person' | 'device' | 'healthcare-service' | 'location';
  required?: 'required' | 'optional' | 'information-only';
}
