import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIconsComponent } from './card-icons.component';

describe('CardIconsComponent', () => {
  let component: CardIconsComponent;
  let fixture: ComponentFixture<CardIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
