import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaType } from 'src/app/core/interfaces/MediaResponse.interface';

@Component({
  selector: 'app-detail-tv',
  templateUrl: './detail.tv-show.html',
  styleUrls: ['./detail.tv-show.css']
})
export class DetailTvShow implements OnInit {

  id!: string;
  mediaType: MediaType = MediaType.Tv;

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.id = id;
  }

}
