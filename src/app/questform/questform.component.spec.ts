import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestformComponent } from './questform.component';

describe('QuestformComponent', () => {
  let component: QuestformComponent;
  let fixture: ComponentFixture<QuestformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
