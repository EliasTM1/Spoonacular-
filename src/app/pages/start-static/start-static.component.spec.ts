import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartStaticComponent } from './start-static.component';

describe('StartStaticComponent', () => {
  let component: StartStaticComponent;
  let fixture: ComponentFixture<StartStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartStaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
