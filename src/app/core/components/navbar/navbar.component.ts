import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { combineLatest } from 'rxjs';
import { Genre } from '../../interfaces/GenreResponse.interface';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];
  
  moviesGenres:Genre[] = [];
  tvShowsGenres:Genre[] = [];

  constructor( private mediaService: MediaService ) { }

  ngOnInit(): void {

    combineLatest( [
      this.mediaService.getGenresByMedia('movie'),
      this.mediaService.getGenresByMedia('tv')
    ]).subscribe( ( [moviesGenres, tvShowsGenres] ) => {
      this.moviesGenres = moviesGenres;
      this.tvShowsGenres = tvShowsGenres;

      const submenuMovies = this.createSubMenu( moviesGenres, 'movies' );
      const submenuTv = this.createSubMenu( tvShowsGenres, 'tv-shows' );

      const itemMenuMovies:MenuItem = 
        {
              label: 'Movies',
              url: '/browse/movies',
              items: submenuMovies
        };

      const itemMenuTv:MenuItem = 
        {
              label: 'Tv Shows',
              url: '/browse/tv-shows',
              items: submenuTv
        };

      this.items = [
        {
          label: 'Home',
          url: '/browse/home'
        },
        {
          label: 'About',
          url: '/browse/about'
        }
      ]

      this.insertIntoMenu( itemMenuMovies, 1 );
      this.insertIntoMenu( itemMenuTv, 2 );

    });

  }

  createSubMenu( genres: Genre[], media: string ){

    const submenu: MenuItem[] = [];
    genres.forEach(genre => {
      submenu.push({
        label: genre.name,
        url: `/browse/${media}/genres/${genre.id}/${genre.name}`
      })
    });

    return submenu;
  }

  insertIntoMenu( menuItem:MenuItem , position: number  ){
    this.items.splice( position, 0, menuItem )
  }

  

}
