import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';


interface imageI {
  path: string,
  alt: string
}

@Component({
	selector: 'app-link',
	templateUrl: './link.component.html',
  imports: [RouterModule, CommonModule],
  standalone: true
})

export class LinkComponent {
  @Input() text: string = '';
  @Input() link: string = '';
  @Input() image: imageI | undefined = undefined;
};
