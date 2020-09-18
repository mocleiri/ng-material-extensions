import { Component, OnInit, Input } from '@angular/core';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import {ShowcaseExample} from '../add-to-showcase';

@Component({
  selector: 'app-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.css']
})
export class ExampleViewerComponent {

  private static readonly ASSETS_ROOT: string = './assets/';
  private static readonly SOURCES_PATH: string = 'example-sources/';

  example: ComponentPortal<any>;
  private fileName: string;
  description: string;
  stackBlitzLink: string;
  @Input()
  set exampleType(type: ShowcaseExample) {
    this.example = new ComponentPortal(type.component);
    this.fileName = type.selector + '.component';
    this.description = type.description;
    // this.stackBlitzLink = type.prototype.stackBlitzLink;
    this.htmlDoc = this.resolveFilePath('.html'); // Will be replaced with a more convinient webpack/bazel solution
    this.tsDoc =  this.resolveFilePath('.js');
    this.cssDoc =  this.resolveFilePath('.css');
  }

  showSource: boolean;
  htmlDoc: string;
  tsDoc: string;
  cssDoc: string;

  constructor() { }

  toggleSource() {
    this.showSource = !this.showSource;
  }

  private resolveFilePath(extension: string): string {
    return ExampleViewerComponent.ASSETS_ROOT + ExampleViewerComponent.SOURCES_PATH +
    this.fileName.replace('.component', '/') +
    this.fileName + extension;
  }

}
