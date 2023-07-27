import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonnavbarComponent } from './commonnavbar.component';

describe('CommonnavbarComponent', () => {
  let component: CommonnavbarComponent;
  let fixture: ComponentFixture<CommonnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonnavbarComponent]
    });
    fixture = TestBed.createComponent(CommonnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
