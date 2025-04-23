import { Component, inject, signal } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  service = inject(StoreService);

  name = signal('Angular');
}
