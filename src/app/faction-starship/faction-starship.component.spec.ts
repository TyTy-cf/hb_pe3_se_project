import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionStarshipComponent } from './faction-starship.component';

describe('FactionStarshipComponent', () => {
  let component: FactionStarshipComponent;
  let fixture: ComponentFixture<FactionStarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactionStarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionStarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
