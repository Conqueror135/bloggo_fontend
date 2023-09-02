import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbreadcrumbComponent } from './appbreadcrumb.component';

describe('AppbreadcrumbComponent', () => {
  let component: AppbreadcrumbComponent;
  let fixture: ComponentFixture<AppbreadcrumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppbreadcrumbComponent]
    });
    fixture = TestBed.createComponent(AppbreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
