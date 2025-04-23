import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  postImage = input.required<string>();
  getImage = output<string>();
}
