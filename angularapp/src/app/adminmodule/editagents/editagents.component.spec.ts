import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditagentsComponent } from './editagents.component';

describe('EditagentsComponent', () => {
  let component: EditagentsComponent;
  let fixture: ComponentFixture<EditagentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditagentsComponent]
    });
    fixture = TestBed.createComponent(EditagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
