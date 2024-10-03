import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    RouterModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
  isOpen: boolean = false;

  // open modal view tutorial
  openModal() {
    this.isOpen = true;
  }

  // close modal view tutorial
  closeModal() {
    this.isOpen = false;
  }

}
