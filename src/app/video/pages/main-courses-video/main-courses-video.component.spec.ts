import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCoursesVideoComponent } from './main-courses-video.component';

describe('MainCoursesVideoComponent', () => {
  let component: MainCoursesVideoComponent;
  let fixture: ComponentFixture<MainCoursesVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCoursesVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCoursesVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
