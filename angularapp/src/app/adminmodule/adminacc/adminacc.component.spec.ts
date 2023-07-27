import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaccComponent } from './adminacc.component';

describe('AdminaccComponent', () => {
  let component: AdminaccComponent;
  let fixture: ComponentFixture<AdminaccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminaccComponent]
    });
    fixture = TestBed.createComponent(AdminaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
