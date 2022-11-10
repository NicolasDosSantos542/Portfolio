import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkImageComponent } from './dk-image.component';

describe('DkImageComponent', () => {
  let component: DkImageComponent;
  let fixture: ComponentFixture<DkImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DkImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DkImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
