import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaType } from 'src/app/core/interfaces/MediaResponse.interface';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail.movie.html',
  styleUrls: ['./detail.movie.css']
})
export class DetailMovie implements OnInit {

  id!: string;
  mediaType: MediaType = MediaType.Movie;

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.id = id;
  }

}
