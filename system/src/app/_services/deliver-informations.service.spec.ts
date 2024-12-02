import { TestBed } from '@angular/core/testing';

import { DeliverInformationsService } from './deliver-informations.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeliverInformationsService', () => {
  let service: DeliverInformationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [DeliverInformationsService]
    });
    service = TestBed.inject(DeliverInformationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
