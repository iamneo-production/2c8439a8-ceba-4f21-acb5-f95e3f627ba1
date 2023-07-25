import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermoduleComponent } from './usermodule.component';

describe('UsermoduleComponent', () => {
  let component: UsermoduleComponent;
  let fixture: ComponentFixture<UsermoduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsermoduleComponent]
    });
    fixture = TestBed.createComponent(UsermoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
