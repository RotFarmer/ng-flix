import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannotBeFoundComponent } from './cannot-be-found.component';

describe('CannotBeFoundComponent', () => {
  let component: CannotBeFoundComponent;
  let fixture: ComponentFixture<CannotBeFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CannotBeFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CannotBeFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
