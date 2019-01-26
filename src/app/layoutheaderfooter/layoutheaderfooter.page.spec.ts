import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutheaderfooterPage } from './layoutheaderfooter.page';

describe('LayoutheaderfooterPage', () => {
  let component: LayoutheaderfooterPage;
  let fixture: ComponentFixture<LayoutheaderfooterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutheaderfooterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutheaderfooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
