import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejorestrabajosComponent } from './mejorestrabajos.component';

describe('MejorestrabajosComponent', () => {
  let component: MejorestrabajosComponent;
  let fixture: ComponentFixture<MejorestrabajosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MejorestrabajosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MejorestrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
