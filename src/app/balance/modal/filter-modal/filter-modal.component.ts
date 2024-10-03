import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-modal',
  standalone: true,
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css']
})
export class FilterModalComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  applyFilter() {
    console.log('Filter applied');
    this.closeModal();
  }
}
