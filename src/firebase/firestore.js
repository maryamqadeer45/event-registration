// import { 
//   collection, 
//   addDoc, 
//   getDocs, 
//   doc, 
//   getDoc,
//   serverTimestamp,
//   query,
//   orderBy 
// } from 'firebase/firestore';
// import { db } from './config';

// // Events collection operations
// export const eventsCollection = collection(db, 'events');
// export const registrationsCollection = collection(db, 'registrations');

// // Get all events
// export const getEvents = async () => {
//   try {
//     const q = query(eventsCollection, orderBy('date', 'asc'));
//     const querySnapshot = await getDocs(q);
//     const events = [];
//     querySnapshot.forEach((doc) => {
//       events.push({ id: doc.id, ...doc.data() });
//     });
//     return events;
//   } catch (error) {
//     console.error('Error getting events: ', error);
//     throw error;
//   }
// };

// // Get single event
// export const getEvent = async (eventId) => {
//   try {
//     const eventDoc = doc(db, 'events', eventId);
//     const eventSnap = await getDoc(eventDoc);
    
//     if (eventSnap.exists()) {
//       return { id: eventSnap.id, ...eventSnap.data() };
//     } else {
//       throw new Error('Event not found');
//     }
//   } catch (error) {
//     console.error('Error getting event: ', error);
//     throw error;
//   }
// };

// // Register for an event
// export const registerForEvent = async (registrationData) => {
//   try {
//     const docRef = await addDoc(registrationsCollection, {
//       ...registrationData,
//       timestamp: serverTimestamp()
//     });
//     return docRef.id;
//   } catch (error) {
//     console.error('Error registering for event: ', error);
//     throw error;
//   }
// };

// // Get all registrations (for admin use)
// export const getRegistrations = async () => {
//   try {
//     const q = query(registrationsCollection, orderBy('timestamp', 'desc'));
//     const querySnapshot = await getDocs(q);
//     const registrations = [];
//     querySnapshot.forEach((doc) => {
//       registrations.push({ id: doc.id, ...doc.data() });
//     });
//     return registrations;
//   } catch (error) {
//     console.error('Error getting registrations: ', error);
//     throw error;
//   }
// };
import {
  collection,
  addDoc,
  setDoc,
  getDocs,
  doc,
  getDoc,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from './config';

const eventsCollection = collection(db, 'events');
const registrationsCollection = collection(db, 'registrations');

export const getEvents = async () => {
  try {
    const q = query(eventsCollection, orderBy('date', 'asc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error getting events:', error);
    throw error;
  }
};

export const getEvent = async (eventId) => {
  try {
    const eventDoc = doc(db, 'events', eventId);
    const eventSnap = await getDoc(eventDoc);

    if (!eventSnap.exists()) {
      throw new Error('Event not found');
    }

    return { id: eventSnap.id, ...eventSnap.data() };
  } catch (error) {
    console.error('Error getting event:', error);
    throw error;
  }
};

export const registerForEvent = async (registrationData) => {
  try {
    const docRef = await addDoc(registrationsCollection, {
      ...registrationData,
      timestamp: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error registering for event:', error);
    throw error;
  }
};

export const getRegistrations = async () => {
  try {
    const q = query(registrationsCollection, orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error getting registrations:', error);
    throw error;
  }
};

// Admin helpers (optional)
export const getEventRegistrations = async (eventId) => {
  try {
    const all = await getRegistrations();
    return all.filter((r) => r.eventId === eventId);
  } catch (error) {
    console.error('Error getting event registrations:', error);
    throw error;
  }
};

export const addEvent = async (event) => {
  try {
    // If id provided, use it for deterministic seeding, else let Firestore auto-id
    if (event.id) {
      const targetDoc = doc(db, 'events', event.id);
      await setDoc(targetDoc, {
        title: event.title,
        date: event.date,
        description: event.description || '',
        location: event.location || '',
        image: event.image || '',
      });
      return event.id;
    }
    const ref = await addDoc(eventsCollection, {
      title: event.title,
      date: event.date,
      description: event.description || '',
      location: event.location || '',
      image: event.image || '',
    });
    return ref.id;
  } catch (error) {
    console.error('Error adding event:', error);
    throw error;
  }
};

export const seedEvents = async (eventsArray) => {
  if (!Array.isArray(eventsArray) || eventsArray.length === 0) return [];
  const createdIds = [];
  for (const evt of eventsArray) {
    const id = await addEvent(evt);
    createdIds.push(id);
  }
  return createdIds;
};