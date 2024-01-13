import { Component, Input, inject } from '@angular/core';
import { FeedCardComponent } from '../feed-card/feed-card.component';
import { ActivatedRoute } from '@angular/router';
import { FeedCard } from '../../models/feed-card.model';
import { CommonModule } from '@angular/common';
import { FeedService } from '../../services/feed.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
	selector: 'feed-list',
	templateUrl: './feed-list.component.html',
  imports: [FeedCardComponent, CommonModule],
  standalone: true,
})

export class FeedListComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  // feedService: FeedService = inject(FeedService)
  page: string | undefined = this.route.snapshot.routeConfig?.path
  title: string = this.page === 'favorites' ? 'Favorites' : 'Global Feed'
  list: FeedCard[] | [] = [{
    "slug": "how-to-train-your-dragon",
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "It takes a Jacobian",
    "tagList": ["dragons", "training"],
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z",
    "favorited": false,
    "favoritesCount": 0,
    "author": {
      "username": "jake",
      "bio": "I work at statefarm",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false
    }
  }, {
    "slug": "how-to-train-your-dragon-2",
    "title": "How to train your dragon 2",
    "description": "So toothless",
    "body": "It a dragon",
    "tagList": ["dragons", "training"],
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z",
    "favorited": false,
    "favoritesCount": 0,
    "author": {
      "username": "Fin",
      "bio": "I work at statefarm",
      "following": false
    }
  }]

  // ngOnInit() {
  //   console.log('asd')
  // }
};
