import { TestBed } from '@angular/core/testing';

import { InfocompartidaService } from './infocompartida.service';

describe('InfocompartidaService', () => {
  let service: InfocompartidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfocompartidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
