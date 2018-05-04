/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductdetailService } from './productdetail.service';

describe('Service: Productdetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductdetailService]
    });
  });

  it('should ...', inject([ProductdetailService], (service: ProductdetailService) => {
    expect(service).toBeTruthy();
  }));
});
