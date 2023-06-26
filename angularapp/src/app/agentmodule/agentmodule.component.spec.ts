import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentmoduleComponent } from './agentmodule.component';

describe('AgentmoduleComponent', () => {
  let component: AgentmoduleComponent;
  let fixture: ComponentFixture<AgentmoduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentmoduleComponent]
    });
    fixture = TestBed.createComponent(AgentmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
