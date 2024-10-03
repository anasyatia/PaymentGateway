import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { IssungBankComponent } from "./component/issung-bank/issung-bank.component";
import { PaymentTypeComponent } from "./component/payment-type/payment-type.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    IssungBankComponent,
    PaymentTypeComponent
],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

}
