import { Component } from '@angular/core';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
import { NavbarComponent } from '../../../navbar/navbar.component';

@Component({
  selector: 'app-bulk-history',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent],
  templateUrl: './bulk-history.component.html',
  styleUrl: './bulk-history.component.css'
})
export class BulkHistoryComponent {

}
