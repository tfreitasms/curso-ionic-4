import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutcssutilitiesPage } from './layoutcssutilities.page';

describe('LayoutcssutilitiesPage', () => {
  let component: LayoutcssutilitiesPage;
  let fixture: ComponentFixture<LayoutcssutilitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutcssutilitiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutcssutilitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
