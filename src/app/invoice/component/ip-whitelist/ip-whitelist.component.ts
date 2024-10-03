import { Component } from '@angular/core';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
import { NavbarComponent } from '../../../navbar/navbar.component';

@Component({
  selector: 'app-ip-whitelist',
  standalone: true,
  imports: [
    SidebarComponent,
    NavbarComponent
  ],
  templateUrl: './ip-whitelist.component.html',
  styleUrl: './ip-whitelist.component.css'
})
export class IpWhitelistComponent {

}
