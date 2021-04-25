import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/MediaResponse.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() title: string = '';
  @Input() results: Result[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
