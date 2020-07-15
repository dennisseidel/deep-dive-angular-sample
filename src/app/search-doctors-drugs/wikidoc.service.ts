import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikidocService {

  constructor() { }

  search(term: string) {
    return 'test result'
  }
}
