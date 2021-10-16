import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonerComponent } from './personer.component';

describe('PersonerComponent', () => {
  let component: PersonerComponent;
  let fixture: ComponentFixture<PersonerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
