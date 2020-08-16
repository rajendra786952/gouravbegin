import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultySingleVideoComponent } from './faculty-single-video.component';

describe('FacultySingleVideoComponent', () => {
  let component: FacultySingleVideoComponent;
  let fixture: ComponentFixture<FacultySingleVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultySingleVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultySingleVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
