import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexIndexComponent } from './pokedex-index.component';

describe('PokedexIndexComponent', () => {
  let component: PokedexIndexComponent;
  let fixture: ComponentFixture<PokedexIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
