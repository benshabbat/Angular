import { Component, inject } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  service = inject(StoreService);

  dc = this.service.doubleCount;

  


}
