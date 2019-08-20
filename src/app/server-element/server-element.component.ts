import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  // Let's define the type for the property we want to use in our HTML
  @Input('srvElement')
  element: {
    type: string,
    name: string,
    content: string
  };

  constructor() { }

  ngOnInit() {
  }

}
