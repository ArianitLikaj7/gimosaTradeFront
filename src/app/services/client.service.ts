import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Client {
  id?: number;
  name: string;
  address: string;
  oib: string;
  email: string;
  phone: string;
  date: string;
  pallets: number;
  packages: number;
}

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'https://gimosatrade.onrender.com/api/clients';

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client);
  }

  deleteClient(clientId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${clientId}`);
  }

  updateClient(clientId: number, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${clientId}`, client);
  }
}
