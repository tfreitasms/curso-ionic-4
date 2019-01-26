import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutmenuPage } from './layoutmenu.page';

describe('LayoutmenuPage', () => {
  let component: LayoutmenuPage;
  let fixture: ComponentFixture<LayoutmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutmenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
