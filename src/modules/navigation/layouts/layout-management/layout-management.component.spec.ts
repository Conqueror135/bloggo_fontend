import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutManagementComponent } from './layout-management.component';

describe('LayoutManagementComponent', () => {
  let component: LayoutManagementComponent;
  let fixture: ComponentFixture<LayoutManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutManagementComponent]
    });
    fixture = TestBed.createComponent(LayoutManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
