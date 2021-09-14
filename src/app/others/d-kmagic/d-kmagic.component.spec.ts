import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DKmagicComponent } from './d-kmagic.component';

describe('DKmagicComponent', () => {
  let component: DKmagicComponent;
  let fixture: ComponentFixture<DKmagicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DKmagicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DKmagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
