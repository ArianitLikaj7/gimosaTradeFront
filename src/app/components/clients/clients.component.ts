import { Component } from '@angular/core';
import { ClientService, Client } from "../../services/client.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ClientsComponent {
  clients: Client[] = [];
  filteredClients: Client[] = [];  // Lista e filtruar që përdoret për shfaqjen
  showClientList = false;
  selectedClient: Client | null = null;
  searchTerm: string = '';  // Vlera e kërkimit që përdoruesi shkruan

  constructor(private clientService: ClientService) {}

  // Toggle show/hide clients
  toggleClients() {
    this.showClientList = !this.showClientList;
    if (this.showClientList) {
      this.clientService.getClients().subscribe(
        (data) => {
          this.clients = data;
          this.filteredClients = data;  // Fillojmë me të gjithë klientët
        },
        (error) => {
          console.error('Error loading clients', error);
        }
      );
    }
  }

  // Funksioni për filtrimin e klientëve bazuar në kërkimin
  searchClients() {
    if (!this.searchTerm) {
      this.filteredClients = this.clients;  // Nëse nuk ka kërkim, shfaqim të gjithë klientët
    } else {
      // Filtrojmë vetëm për emrin e klientit
      this.filteredClients = this.clients.filter(client =>
        client.name.toLowerCase().includes(this.searchTerm.toLowerCase()) // Filtrim vetëm për emër
      );
    }
  }


  deleteClient(clientId: number | undefined) {
    if (clientId === undefined) {
      console.error('Client ID është i pavlefshëm');
      return;
    }

    this.clientService.deleteClient(clientId).subscribe(
      () => {
        console.log('Klienti u fshi me sukses');
        this.clients = this.clients.filter(client => client.id !== clientId); // Fshi klientin nga lista
        this.searchClients(); // Përditësojmë listën e filtruar pas fshirjes
      },
      (error) => {
        console.error('Gabim gjatë fshirjes së klientit:', error);
      }
    );
  }
}
