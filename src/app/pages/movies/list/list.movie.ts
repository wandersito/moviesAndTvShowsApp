import { Component, OnInit } from '@angular/core';
import { MediaType, Result } from 'src/app/core/interfaces/MediaResponse.interface';
import { MediaService } from 'src/app/core/services/media.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list.movie.html',
  styleUrls: ['./list.movie.css']
})
export class ListMovie implements OnInit {

  movies:Result[] = [];
  header: string = 'Movies';

  constructor( private mediaService: MediaService ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  ngOnDestroy(): void {
    this.mediaService.reset();
  }

  getMovies(){
      this.mediaService.getAllByMedia( MediaType.Movie )
        .subscribe( movies => {
          this.movies.push(...movies);
        })

  }

}
