import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPollsComponent } from './admin-polls.component';

describe('AdminPollsComponent', () => {
  let component: AdminPollsComponent;
  let fixture: ComponentFixture<AdminPollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
