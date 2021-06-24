import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccpageComponent } from './succpage.component';

describe('SuccpageComponent', () => {
  let component: SuccpageComponent;
  let fixture: ComponentFixture<SuccpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
