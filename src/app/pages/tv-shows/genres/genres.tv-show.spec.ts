import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresTvShow } from './genres.tv-show';

describe('GenresTvShow', () => {
  let component: GenresTvShow;
  let fixture: ComponentFixture<GenresTvShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresTvShow ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresTvShow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
