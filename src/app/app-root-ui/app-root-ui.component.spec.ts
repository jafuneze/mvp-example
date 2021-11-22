import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRootUiComponent } from './app-root-ui.component';

describe('AppRootUiComponent', () => {
  let component: AppRootUiComponent;
  let fixture: ComponentFixture<AppRootUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRootUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRootUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
