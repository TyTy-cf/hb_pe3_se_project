import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPokedexComponent } from './api-pokedex.component';

describe('ApiPokedexComponent', () => {
  let component: ApiPokedexComponent;
  let fixture: ComponentFixture<ApiPokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPokedexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
