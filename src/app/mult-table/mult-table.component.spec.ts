import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultTableComponent } from './mult-table.component';

describe('MultTableComponent', () => {
  let component: MultTableComponent;
  let fixture: ComponentFixture<MultTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
