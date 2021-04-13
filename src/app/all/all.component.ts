import { Component, OnInit } from '@angular/core';
import sampleData from 'src/assets/data.json';

interface Data {
Name : String;
Description : String;
Thumbnail:String;

}

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.styl']
})
export class AllComponent implements OnInit {
  SampleUsers : Data[] = sampleData;

  constructor() { }

  ngOnInit(): void {
  }

}
