import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMultTableComponent } from './main-mult-table.component';

describe('MainMultTableComponent', () => {
  let component: MainMultTableComponent;
  let fixture: ComponentFixture<MainMultTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMultTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
