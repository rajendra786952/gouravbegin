import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMainCategoryComponent } from './video-main-category.component';

describe('VideoMainCategoryComponent', () => {
  let component: VideoMainCategoryComponent;
  let fixture: ComponentFixture<VideoMainCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoMainCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoMainCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
