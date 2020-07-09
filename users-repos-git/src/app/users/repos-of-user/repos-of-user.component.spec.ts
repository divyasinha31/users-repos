import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposOfUserComponent } from './repos-of-user.component';

describe('ReposOfUserComponent', () => {
  let component: ReposOfUserComponent;
  let fixture: ComponentFixture<ReposOfUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposOfUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
