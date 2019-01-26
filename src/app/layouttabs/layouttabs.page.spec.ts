import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayouttabsPage } from './layouttabs.page';

describe('LayouttabsPage', () => {
  let component: LayouttabsPage;
  let fixture: ComponentFixture<LayouttabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayouttabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayouttabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
