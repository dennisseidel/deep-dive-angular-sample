import { Component, OnInit } from '@angular/core';
import { WikidocService } from '../wikidoc.service'

@Component({
  selector: 'app-search-doctors-drugs-home',
  templateUrl: './search-doctors-drugs-home.component.html',
  styleUrls: ['./search-doctors-drugs-home.component.css']
})
export class SearchDoctorsDrugsHomeComponent implements OnInit {

  constructor(private wikidoc: WikidocService) { }

  ngOnInit(): void {
  }

  onTerm(term: string) {
    const results = this.wikidoc.search(term)
    console.log(results)
  }

}
