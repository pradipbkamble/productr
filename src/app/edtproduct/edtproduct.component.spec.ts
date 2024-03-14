import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtproductComponent } from './edtproduct.component';

describe('EdtproductComponent', () => {
  let component: EdtproductComponent;
  let fixture: ComponentFixture<EdtproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdtproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdtproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
