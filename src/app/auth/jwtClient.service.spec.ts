/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JwtClientService } from './jwtClient.service';

describe('Service: JwtClient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtClientService]
    });
  });

  it('should ...', inject([JwtClientService], (service: JwtClientService) => {
    expect(service).toBeTruthy();
  }));
});
