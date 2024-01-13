import { Component, Input, inject } from '@angular/core';
import { FeedCardComponent } from '../feed-card/feed-card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'feed-list',
	templateUrl: './feed-list.component.html',
  imports: [FeedCardComponent],
  standalone: true
})

export class FeedListComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  page: string | undefined = this.route.snapshot.routeConfig?.path
  title: string = this.page === 'favorites' ? 'Favorites' : 'Global Feed'
};
