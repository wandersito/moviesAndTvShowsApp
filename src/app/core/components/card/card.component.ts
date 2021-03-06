import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/MediaResponse.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() results: Result[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
