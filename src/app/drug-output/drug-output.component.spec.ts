import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugOutputComponent } from './drug-output.component';

describe('DrugOutputComponent', () => {
  let component: DrugOutputComponent;
  let fixture: ComponentFixture<DrugOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
