import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentaddComponent } from './agentadd.component';

describe('AgentaddComponent', () => {
  let component: AgentaddComponent;
  let fixture: ComponentFixture<AgentaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentaddComponent]
    });
    fixture = TestBed.createComponent(AgentaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
