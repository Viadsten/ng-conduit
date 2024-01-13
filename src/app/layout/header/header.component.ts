import { Component } from '@angular/core';
import { LinkComponent } from '../../ui/link/link.component';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
  imports: [LinkComponent, RouterModule],
  standalone: true
})

export class HeaderComponent {};
