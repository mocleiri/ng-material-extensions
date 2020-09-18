import {Injectable, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ArrayFilterComponent} from './examples/array-filter/array-filter.component';
import {SelectionExporterComponent} from './examples/selection-exporter/selection-exporter.component';
import {CustomExporterComponent} from './examples/custom-exporter/custom-exporter.component';
import {BriefExporterComponent} from './examples/brief-exporter/brief-exporter.component';
import {PropertyOptionsComponent} from './examples/property-options/property-options.component';
import {CustomColumnFilterComponent} from './examples/custom-column-filter/custom-column-filter.component';
import {SimpleFilterComponent} from './examples/simple-filter/simple-filter.component';

@Injectable({
  providedIn: 'root'
})
export class ShowcaseService {

  private showCaseExamples: Map<string, Array<ShowcaseExample>> = new Map();


  constructor() {
    this.addToShowCase('filter', ArrayFilterComponent, 'array-filter', 'Array Filter');
    this.addToShowCase('exporter', SelectionExporterComponent, 'selection-exporter', 'Selected Row Exporting Example');
    this.addToShowCase('exporter', CustomExporterComponent, 'custom-exporter', 'Custom Exporting Implementation');
    this.addToShowCase('exporter', BriefExporterComponent, 'brief-exporter', 'Overall Exporting Example');
    this.addToShowCase('filter', PropertyOptionsComponent, 'property-options', 'Changing Property Options');
    this.addToShowCase('filter', CustomColumnFilterComponent, 'custom-column-filter', 'Custom Property Predicate');
    this.addToShowCase('filter', SimpleFilterComponent, 'simple-filter', 'Simple Filter');
  }

  private addToShowCase(categoryName: string, component: any, selector: string, description: string) {

    const example: ShowcaseExample = new ShowcaseExample(component, selector, description, categoryName);

    const categoryArray = this.showCaseExamples.get(categoryName);
    if (!categoryArray) {
      const examples = new Array<ShowcaseExample>();
      examples.push(example);
      this.showCaseExamples.set(categoryName, examples);
    } else {
      categoryArray.push(example);
    }
  }

  getMatFilterExamples(): Array<ShowcaseExample> {
    return this.showCaseExamples.get('filter');
  }

  getMatExporterExamples(): Array<ShowcaseExample> {
    return this.showCaseExamples.get('exporter');
  }
}
export class ShowcaseExample {

  constructor(public component: any, public selector: string, public description: string, public category: string) {
  }
}

