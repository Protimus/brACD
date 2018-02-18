import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatiticsComponent } from './statitics.component';

describe('StatiticsComponent', () => {
  let component: StatiticsComponent;
  let fixture: ComponentFixture<StatiticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatiticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatiticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
