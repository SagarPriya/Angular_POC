import { Component, OnInit } from '@angular/core';
import sampleData from 'src/assets/data.json';

interface Data {
Name : String;
Description : String;
Thumbnail:String;

}
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.styl']
})
export class CareerComponent implements OnInit {
  SampleUsers : Data[] = sampleData;

  constructor() { }

  ngOnInit(): void {
  }

}
