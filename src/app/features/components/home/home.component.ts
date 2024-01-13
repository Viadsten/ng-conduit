import { Component } from '@angular/core';
import { FeedCardComponent } from '../feed-card/feed-card.component';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
  imports: [FeedCardComponent],
  standalone: true
})

export class HomeComponent {};
