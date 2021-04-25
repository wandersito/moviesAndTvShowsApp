import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaType, Result } from 'src/app/core/interfaces/MediaResponse.interface';
import { MediaService } from 'src/app/core/services/media.service';

@Component({
  selector: 'app-genres-movie',
  templateUrl: './genres.movie.html',
  styleUrls: ['./genres.movie.css']
})
export class GenresMovie implements OnInit {

  header: string = '';
  movies:Result[] = [];

  constructor(  private mediaService:MediaService,
                private activatedRoute:ActivatedRoute ) {  }
 
  ngOnInit(): void {
    const { name } = this.activatedRoute.snapshot.params;
    this.header = `Movies: ${name}`;
    this.getMovies()
  }

  getMovies(){
    const { genre } = this.activatedRoute.snapshot.params;
    this.mediaService.getMediaByGenre( genre, MediaType.Movie )
        .subscribe( movies => {
          this.movies.push(...movies);
        });
  }

  ngOnDestroy(): void {
    this.mediaService.reset();
  }

}
