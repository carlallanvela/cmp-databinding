import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  DoCheck,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements
 OnInit,
 SimpleChange,
 DoCheck,
 OnChanges,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy {

  // Let's define the type for the property we want to use in our HTML
  // tslint:disable-next-line: no-input-rename
  @Input('srvElement')
  element: {
    type: string,
    name: string,
    content: string
  };

  @Input() name: string;

  constructor() {
    console.log('constructor called');
   }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit called');
  // }

  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked called');
  // }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

  // tslint:disable-next-line: member-ordering
  previousValue: any;
  // tslint:disable-next-line: member-ordering
  // tslint:disable-next-line: member-ordering
  currentValue: any;
  firstChange: boolean;
  isFirstChange(): boolean {
    throw new Error("Method not implemented.");
  }
}
