import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentnavbarComponent } from './agentnavbar.component';

describe('AgentnavbarComponent', () => {
  let component: AgentnavbarComponent;
  let fixture: ComponentFixture<AgentnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentnavbarComponent]
    });
    fixture = TestBed.createComponent(AgentnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
