
import { BaseComponent } from '../base-component';
import { Component, OnInit } from '@angular/core';
import {ShowcaseService} from '../add-to-showcase';

@Component({
  selector: 'app-exporter',
  templateUrl: './exporter.component.html',
  styleUrls: ['./exporter.component.css']
})
export class ExporterComponent extends BaseComponent implements OnInit {


  constructor(private showcaseService: ShowcaseService) {
    super();
  }

  ngOnInit() {
    this.examples = this.showcaseService.getMatExporterExamples();
  }

}
