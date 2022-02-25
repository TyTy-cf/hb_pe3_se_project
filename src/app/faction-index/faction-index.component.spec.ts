import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionIndexComponent } from './faction-index.component';

describe('FactionIndexComponent', () => {
  let component: FactionIndexComponent;
  let fixture: ComponentFixture<FactionIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactionIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
