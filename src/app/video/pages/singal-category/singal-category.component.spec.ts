import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingalCategoryComponent } from './singal-category.component';

describe('SingalCategoryComponent', () => {
  let component: SingalCategoryComponent;
  let fixture: ComponentFixture<SingalCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingalCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingalCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
