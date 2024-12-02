import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeliverInfoComponent } from './deliver-info.component';
import { DeliverInformationsService } from '../../../_services/deliver-informations.service';

describe('DeliverInfoComponent', () => {
  let component: DeliverInfoComponent;
  let fixture: ComponentFixture<DeliverInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // 导入 HttpClientTestingModule
      declarations: [ DeliverInfoComponent ], // 声明 DeliverInfoComponent
      providers: [DeliverInformationsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
