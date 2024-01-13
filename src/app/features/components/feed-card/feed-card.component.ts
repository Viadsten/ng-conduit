import { Component, Input } from '@angular/core';
import { FeedCard } from '../../models/feed-card.model';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'feed-card',
	templateUrl: './feed-card.component.html',
  imports: [CommonModule],
  standalone: true
})

export class FeedCardComponent {
  @Input() data: FeedCard | undefined = undefined;
};
