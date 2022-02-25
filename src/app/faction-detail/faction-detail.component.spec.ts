import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionDetailComponent } from './faction-detail.component';

describe('FactionDetailComponent', () => {
  let component: FactionDetailComponent;
  let fixture: ComponentFixture<FactionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
