import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomateIdeaComponent } from './automate-idea.component';

describe('AutomateIdeaComponent', () => {
  let component: AutomateIdeaComponent;
  let fixture: ComponentFixture<AutomateIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomateIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomateIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
