import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DunningkrugerComponent } from './dunningkruger.component';

describe('DunningkrugerComponent', () => {
  let component: DunningkrugerComponent;
  let fixture: ComponentFixture<DunningkrugerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DunningkrugerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DunningkrugerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
