import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutgridPage } from './layoutgrid.page';

describe('LayoutgridPage', () => {
  let component: LayoutgridPage;
  let fixture: ComponentFixture<LayoutgridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutgridPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutgridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
