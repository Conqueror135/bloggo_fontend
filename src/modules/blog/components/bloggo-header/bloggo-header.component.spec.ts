import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggoHeaderComponent } from './bloggo-header.component';

describe('BloggoHeaderComponent', () => {
  let component: BloggoHeaderComponent;
  let fixture: ComponentFixture<BloggoHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloggoHeaderComponent]
    });
    fixture = TestBed.createComponent(BloggoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
