import { TestBed } from '@angular/core/testing';

import { MyappsercviceService } from './myappsercvice.service';

describe('MyappsercviceService', () => {
  let service: MyappsercviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyappsercviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
