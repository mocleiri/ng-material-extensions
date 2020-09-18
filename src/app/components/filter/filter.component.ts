import {ShowcaseService} from '../add-to-showcase';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent extends BaseComponent implements OnInit {

  constructor(private showcaseService: ShowcaseService) {
    super();
  }

  ngOnInit() {
    this.examples = this.showcaseService.getMatFilterExamples();
  }

}
