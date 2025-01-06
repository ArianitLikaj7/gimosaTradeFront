import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class CreateClientComponent {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.clientForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      oib: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      date: ['', [Validators.required]],
      pallets: [0, [Validators.min(0)]],
      packages: [0, [Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      this.clientService.createClient(this.clientForm.value).subscribe(
        (response) => {
          console.log('Klienti u krijua me sukses', response);
        },
        (error) => {
          console.error('Gabim gjatë krijimit të klientit', error);
        }
      );
    } else {
      console.error('Forma nuk është valide');
    }
  }
}
