import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugInputComponent } from './drug-input.component';

describe('DrugInputComponent', () => {
  let component: DrugInputComponent;
  let fixture: ComponentFixture<DrugInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
