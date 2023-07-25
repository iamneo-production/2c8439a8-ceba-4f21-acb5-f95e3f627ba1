import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharepagesComponent } from './sharepages.component';

describe('SharepagesComponent', () => {
  let component: SharepagesComponent;
  let fixture: ComponentFixture<SharepagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharepagesComponent]
    });
    fixture = TestBed.createComponent(SharepagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
