import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentprofileComponent } from './agentprofile.component';

describe('AgentprofileComponent', () => {
  let component: AgentprofileComponent;
  let fixture: ComponentFixture<AgentprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentprofileComponent]
    });
    fixture = TestBed.createComponent(AgentprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
