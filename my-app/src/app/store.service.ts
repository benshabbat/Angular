import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);
  dec() {
    this.count.update((prevData) => (prevData -= 1));
  }
  
  constructor() {
    effect(() => {
      console.log(this.count());
    });
  }
}
