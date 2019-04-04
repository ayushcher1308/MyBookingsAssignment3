import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqSComponent } from './faq-s.component';

describe('FaqSComponent', () => {
  let component: FaqSComponent;
  let fixture: ComponentFixture<FaqSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
