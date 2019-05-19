import { TestBed } from '@angular/core/testing';

import { InviteMerchantService } from './invite-merchant.service';

describe('InviteMerchantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InviteMerchantService = TestBed.get(InviteMerchantService);
    expect(service).toBeTruthy();
  });
});
