import { TestBed } from '@angular/core/testing';

import { CreerCommandeService } from './creer-commande.service';

describe('CreerCommandeService', () => {
  let service: CreerCommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreerCommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
