import { TestBed } from '@angular/core/testing';

import { WikidocService } from './wikidoc.service';

describe('WikidocService', () => {
  let service: WikidocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikidocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
