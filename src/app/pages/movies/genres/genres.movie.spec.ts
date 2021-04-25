import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresMovie } from './genres.movie';

describe('GenresMovie', () => {
  let component: GenresMovie;
  let fixture: ComponentFixture<GenresMovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresMovie ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresMovie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
