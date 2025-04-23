import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { StoreService } from './store.service';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BodyComponent, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [StoreService],
})
export class AppComponent {
  title = 'my-app';

  imageUrl = signal('https://picsum.photos/id/237/200/300');
  changeImage(e: KeyboardEvent) {
    this.imageUrl.set((e.target as HTMLInputElement).value);
  }
  logImage(e: string) {
    console.log(e);
  }

  constructor() {}
}
