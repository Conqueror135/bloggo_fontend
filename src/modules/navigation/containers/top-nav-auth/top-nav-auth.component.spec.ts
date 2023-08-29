import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavAuthComponent } from './top-nav-auth.component';

describe('TopNavAuthComponent', () => {
  let component: TopNavAuthComponent;
  let fixture: ComponentFixture<TopNavAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopNavAuthComponent]
    });
    fixture = TestBed.createComponent(TopNavAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
