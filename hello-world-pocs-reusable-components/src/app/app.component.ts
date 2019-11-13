import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Angular App';

  post={
    title : 'Title',
    isFavorite : true
  }

  tweet={
    likesCount:10,
    isLiked:false
  }

  onFavChanged(eventArngs:FavoriteChangedEventArgs){
    alert("Favorite onFavChanged:: "+eventArngs.newValue);
  }
}
