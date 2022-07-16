import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSettingsComponent } from './toggle-settings.component';

describe('ToggleSettingsComponent', () => {
  let component: ToggleSettingsComponent;
  let fixture: ComponentFixture<ToggleSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
