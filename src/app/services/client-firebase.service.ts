import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientFirebaseService {
  firestore = inject(Firestore);
  clientsCollection = collection(this.firestore, 'clients');

  getClients(): Observable<any[]> {
    const clients = collectionData(this.clientsCollection, { idField: 'id' });

    return clients.pipe(
      map((data: any[]) => {
        return data.map(client => {
          return {
            id: client.id,
            name: client.Emri, // Përdorni emrat e fushave si janë në Firebase
            contact: client.Kontakti,
            pallets: client['Numri i Paletave'], // Sigurohuni që të përdorni fushat e sakta
            packages: client['Numri i Pakove']
          };
        });
      })
    );
  }

  constructor() { }
}
