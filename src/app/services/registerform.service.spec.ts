import { TestBed } from '@angular/core/testing';

import { RegisterformService } from './registerform.service';

describe('RegisterformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterformService = TestBed.get(RegisterformService);
    expect(service).toBeTruthy();
  });
});
