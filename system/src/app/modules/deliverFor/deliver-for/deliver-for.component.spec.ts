import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverForComponent } from './deliver-for.component';

describe('DeliverForComponent', () => {
  let component: DeliverForComponent;
  let fixture: ComponentFixture<DeliverForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliverForComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliverForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
