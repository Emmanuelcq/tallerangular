import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenContactosComponent } from './resumen-contactos.component';

describe('ResumenContactosComponent', () => {
  let component: ResumenContactosComponent;
  let fixture: ComponentFixture<ResumenContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
