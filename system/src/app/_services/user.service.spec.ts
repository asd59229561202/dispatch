import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {ToastrModule, ToastrService} from 'ngx-toastr';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [
        UserService,
        {provide: ToastrService, useClass: ToastrService}
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
